# C# 事件（Event）

**一、事件概述**

C# 事件是一种成员，用于将特定的事件通知发送给订阅者。事件通常用于实现观察者模式，它允许一个对象将状态的变化通知其他对象，而不需要知道这些对象的细节。

事件基本上说是一个用户操作，如按键、点击、鼠标移动等等，或者是一些提示信息，如系统生成的通知。应用程序需要在事件发生时响应事件。例如，中断。C# 中使用事件机制实现线程间的通信。

**二、关键点**

1. 声明委托：定义事件将使用的委托类型。委托是一个函数签名。
2. 声明事件：使用`event`关键字声明一个事件。
3. 触发事件：在适当的时候调用事件，通知所有订阅者。
4. 订阅和取消订阅事件：其他类可以通过`+=`和`-=`运算符订阅和取消订阅事件。

**三、通过事件使用委托**

事件在类中声明且生成，且通过使用同一个类或其他类中的委托与事件处理程序关联。包含事件的类用于发布事件。这被称为发布器（publisher）类。其他接受该事件的类被称为订阅器（subscriber）类。事件使用发布 - 订阅（publisher - subscriber）模型。

发布器（publisher）是一个包含事件和委托定义的对象。事件和委托之间的联系也定义在这个对象中。发布器（publisher）类的对象调用这个事件，并通知其他的对象。

订阅器（subscriber）是一个接受事件并提供事件处理程序的对象。在发布器（publisher）类中的委托调用订阅器（subscriber）类中的方法（事件处理程序）。

**四、声明事件**

在类的内部声明事件，首先必须声明该事件的委托类型。例如：

```csharp
public delegate void BoilerLogHandler(string status);
```

然后，声明事件本身，使用`event`关键字：

```csharp
// 基于上面的委托定义事件
public event BoilerLogHandler BoilerEventLog;
```

上面的代码定义了一个名为`BoilerLogHandler`的委托和一个名为`BoilerEventLog`的事件，该事件在生成的时候会调用委托。

以下是两个示例展示了如何在 C# 中使用事件：

**示例 1**：

```csharp
using System;
namespace SimpleEvent
{
  /***********发布器类***********/
  public class EventTest
  {
    private int value;

    public delegate void NumManipulationHandler();


    public event NumManipulationHandler ChangeNum;
    protected virtual void OnNumChanged()
    {
      if ( ChangeNum!= null )
      {
        ChangeNum(); /* 事件被触发 */
      }else {
        Console.WriteLine( "event not fire" );
        Console.ReadKey(); /* 回车继续 */
      }
    }


    public EventTest()
    {
      int n = 5;
      SetValue( n );
    }


    public void SetValue( int n )
    {
      if ( value!= n )
      {
        value = n;
        OnNumChanged();
      }
    }
  }


  /***********订阅器类***********/

  public class subscribEvent
  {
    public void printf()
    {
      Console.WriteLine( "event fire" );
      Console.ReadKey(); /* 回车继续 */
    }
  }

  /***********触发***********/
  public class MainClass
  {
    public static void Main()
    {
      EventTest e = new EventTest(); /* 实例化对象,第一次没有触发事件 */
      subscribEvent v = new subscribEvent(); /* 实例化对象 */
      e.ChangeNum += new EventTest.NumManipulationHandler( v.printf ); /* 注册 */
      e.SetValue( 7 );
      e.SetValue( 11 );
    }
  }
}
```

当上面的代码被编译和执行时，会产生以下结果：

`event not fire`

`event fire`

`event fire`

**示例 2**：

```csharp
using System;
using System.IO;

namespace BoilerEventAppl
{
    // Boiler 类
    class Boiler
    {
        public int Temp { get; private set; }
        public int Pressure { get; private set; }

        public Boiler(int temp, int pressure)
        {
            Temp = temp;
            Pressure = pressure;
        }
    }

    // 事件发布器
    class DelegateBoilerEvent
    {
        public delegate void BoilerLogHandler(string status);

        // 基于上面的委托定义事件
        public event BoilerLogHandler BoilerEventLog;

        public void LogProcess()
        {
            string remarks = "O.K.";
            Boiler boiler = new Boiler(100, 12);
            int temp = boiler.Temp;
            int pressure = boiler.Pressure;

            if (temp > 150 || temp < 80 || pressure < 12 || pressure > 15)
            {
                remarks = "Need Maintenance";
            }

            OnBoilerEventLog($"Logging Info:\nTemperature: {temp}\nPressure: {pressure}\nMessage: {remarks}");
        }

        protected void OnBoilerEventLog(string message)
        {
            BoilerEventLog?.Invoke(message);
        }
    }

    // 该类保留写入日志文件的条款
    class BoilerInfoLogger : IDisposable
    {
        private readonly StreamWriter _streamWriter;

        public BoilerInfoLogger(string filename)
        {
            _streamWriter = new StreamWriter(new FileStream(filename, FileMode.Append, FileAccess.Write));
        }

        public void Logger(string info)
        {
            _streamWriter.WriteLine(info);
        }

        public void Dispose()
        {
            _streamWriter?.Close();
        }
    }

    // 事件订阅器
    public class RecordBoilerInfo
    {
        static void Logger(string info)
        {
            Console.WriteLine(info);
        }

        static void Main(string[] args)
        {
            using (BoilerInfoLogger fileLogger = new BoilerInfoLogger("e:\\boiler.txt"))
            {
                DelegateBoilerEvent boilerEvent = new DelegateBoilerEvent();
                boilerEvent.BoilerEventLog += Logger;
                boilerEvent.BoilerEventLog += fileLogger.Logger;
                boilerEvent.LogProcess();
            }

            Console.ReadLine();
        }
    }
}
```

当上面的代码被编译和执行时，会产生以下结果：

`Logging info:`

`Temperature 100`

`Pressure 12`

`Message: O. K.`

总之，C#事件提供了一种强大的机制，用于实现对象之间的松散耦合通信，使得代码更加灵活和可维护。