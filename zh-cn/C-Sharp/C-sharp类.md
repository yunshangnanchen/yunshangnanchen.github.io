# C# 类（Class）

**一、概述**

当定义一个类时，就定义了一个数据类型的蓝图。类的对象由类的成员变量和成员方法组成，对象是类的实例。构成类的方法和变量称为类的成员。

**二、类的定义**

类的定义是以关键字`class`开始，后跟类的名称。类的主体包含在一对花括号内。

一般形式如下：

```csharp
<access specifier> class class_name
{
    // member variables
    <access specifier> <data type> variable1;
    <access specifier> <data type> variable2;
   ...
    <access specifier> <data type> variableN;
    // member methods
    <access specifier> <return type> method1(parameter_list)
    {
        // method body
    }
    <access specifier> <return type> method2(parameter_list)
    {
        // method body
    }
   ...
    <access specifier> <return type> methodN(parameter_list)
    {
        // method body
    }
}
```

请注意：
- 访问标识符`<access specifier>`指定了对类及其成员的访问规则。如果没有指定，则使用默认的访问标识符。类的默认访问标识符是`internal`，成员的默认访问标识符是`private`。
- `<data type>`指定了变量的类型，`<return type>`指定了返回的方法返回的数据类型。
- 要访问类的成员，使用点（.）运算符。点运算符链接了对象的名称和成员的名称。

例如：

```csharp
using System;
namespace BoxApplication
{
    class Box
    {
       public double length;   // 长度
       public double breadth;  // 宽度
       public double height;   // 高度
    }
    class Boxtester
    {
        static void Main(string[] args)
        {
            Box Box1 = new Box();        // 声明 Box1，类型为 Box
            Box Box2 = new Box();        // 声明 Box2，类型为 Box
            double volume = 0.0;         // 体积

            // Box1 详述
            Box1.height = 5.0;
            Box1.length = 6.0;
            Box1.breadth = 7.0;

            // Box2 详述
            Box2.height = 10.0;
            Box2.length = 12.0;
            Box2.breadth = 13.0;
           
            // Box1 的体积
            volume = Box1.height * Box1.length * Box1.breadth;
            Console.WriteLine("Box1 的体积： {0}",  volume);

            // Box2 的体积
            volume = Box2.height * Box2.length * Box2.breadth;
            Console.WriteLine("Box2 的体积： {0}", volume);
            Console.ReadKey();
        }
    }
}
```

当上面的代码被编译和执行时，结果为：

```
Box1 的体积： 210
Box2 的体积： 1560
```

**三、成员函数和封装**

类的成员函数是在类定义中有它的定义或原型的函数，能在类的任何对象上操作，且能访问该对象的类的所有成员。

成员变量通常保持私有来实现封装，只能使用公共成员函数来访问。

例如：

```csharp
using System;
namespace BoxApplication
{
    class Box
    {
       private double length;   // 长度
       private double breadth;  // 宽度
       private double height;   // 高度
       public void setLength( double len )
       {
            length = len;
       }

       public void setBreadth( double bre )
       {
            breadth = bre;
       }

       public void setHeight( double hei )
       {
            height = hei;
       }
       public double getVolume()
       {
           return length * breadth * height;
       }
    }
    class Boxtester
    {
        static void Main(string[] args)
        {
            Box Box1 = new Box();        // 声明 Box1，类型为 Box
            Box Box2 = new Box();        // 声明 Box2，类型为 Box
            double volume;               // 体积


            // Box1 详述
            Box1.setLength(6.0);
            Box1.setBreadth(7.0);
            Box1.setHeight(5.0);

            // Box2 详述
            Box2.setLength(12.0);
            Box2.setBreadth(13.0);
            Box2.setHeight(10.0);
       
            // Box1 的体积
            volume = Box1.getVolume();
            Console.WriteLine("Box1 的体积： {0}",volume);

            // Box2 的体积
            volume = Box2.getVolume();
            Console.WriteLine("Box2 的体积： {0}", volume);
           
            Console.ReadKey();
        }
    }
}
```

当上面的代码被编译和执行时，结果为：

```
Box1 的体积： 210
Box2 的体积： 1560
```

**四、构造函数**

类的构造函数是类的一个特殊的成员函数，当创建类的新对象时执行。构造函数的名称与类的名称完全相同，没有任何返回类型。

1. 默认构造函数没有任何参数。例如：

```csharp
using System;
namespace LineApplication
{
   class Line
   {
      private double length;   // 线条的长度
      public Line()
      {
         Console.WriteLine("对象已创建");
      }

      public void setLength( double len )
      {
         length = len;
      }
      public double getLength()
      {
         return length;
      }

      static void Main(string[] args)
      {
         Line line = new Line();    
         // 设置线条长度
         line.setLength(6.0);
         Console.WriteLine("线条的长度： {0}", line.getLength());
         Console.ReadKey();
      }
   }
}
```

当上面的代码被编译和执行时，结果为：

```
对象已创建
线条的长度： 6
```

2. 参数化构造函数有参数，可以在创建对象的同时给对象赋初始值。例如：

```csharp
using System;
namespace LineApplication
{
   class Line
   {
      private double length;   // 线条的长度
      public Line(double len)  // 参数化构造函数
      {
         Console.WriteLine("对象已创建，length = {0}", len);
         length = len;
      }

      public void setLength( double len )
      {
         length = len;
      }
      public double getLength()
      {
         return length;
      }

      static void Main(string[] args)
      {
         Line line = new Line(10.0);
         Console.WriteLine("线条的长度： {0}", line.getLength());
         // 设置线条长度
         line.setLength(6.0);
         Console.WriteLine("线条的长度： {0}", line.getLength());
         Console.ReadKey();
      }
   }
}
```

当上面的代码被编译和执行时，结果为：

```
对象已创建，length = 10
线条的长度： 10
线条的长度： 6
```

**五、析构函数**

类的析构函数是类的一个特殊的成员函数，当类的对象超出范围时执行。析构函数的名称是在类的名称前加上一个波浪形（~）作为前缀，不返回值，也不带任何参数。析构函数用于在结束程序（比如关闭文件、释放内存等）之前释放资源，不能继承或重载。

例如：

```csharp
using System;
namespace LineApplication
{
   class Line
   {
      private double length;   // 线条的长度
      public Line()  // 构造函数
      {
         Console.WriteLine("对象已创建");
      }
      ~Line() //析构函数
      {
         Console.WriteLine("对象已删除");
      }

      public void setLength( double len )
      {
         length = len;
      }
      public double getLength()
      {
         return length;
      }

      static void Main(string[] args)
      {
         Line line = new Line();
         // 设置线条长度
         line.setLength(6.0);
         Console.WriteLine("线条的长度： {0}", line.getLength());          
      }
   }
}
```

当上面的代码被编译和执行时，结果为：

```
对象已创建
线条的长度： 6
对象已删除
```

**六、类的静态成员**

可以使用`static`关键字把类成员定义为静态的。当声明一个类成员为静态时，无论有多少个类的对象被创建，只会有一个该静态成员的副本。

1. 静态变量用于定义常量，可在成员函数或类的定义外部进行初始化，也可以在类的定义内部初始化静态变量。例如：

```csharp
using System;
namespace StaticVarApplication
{
    class StaticVar
    {
       public static int num;
        public void count()
        {
            num++;
        }
        public int getNum()
        {
            return num;
        }
    }
    class StaticTester
    {
        static void Main(string[] args)
        {
            StaticVar s1 = new StaticVar();
            StaticVar s2 = new StaticVar();
            s1.count();
            s1.count();
            s1.count();
            s2.count();
            s2.count();
            s2.count();        
            Console.WriteLine("s1 的变量 num： {0}", s1.getNum());
            Console.WriteLine("s2 的变量 num： {0}", s2.getNum());
            Console.ReadKey();
        }
    }
}
```

当上面的代码被编译和执行时，结果为：

```
s1 的变量 num： 6
s2 的变量 num： 6
```

2. 也可以把一个成员函数声明为`static`。这样的函数只能访问静态变量。静态函数在对象被创建之前就已经存在。例如：

```csharp
using System;
namespace StaticVarApplication
{
    class StaticVar
    {
       public static int num;
        public void count()
        {
            num++;
        }
        public static int getNum()
        {
            return num;
        }
    }
    class StaticTester
    {
        static void Main(string[] args)
        {
            StaticVar s = new StaticVar();
            s.count();
            s.count();
            s.count();                  
            Console.WriteLine("变量 num： {0}", StaticVar.getNum());
            Console.ReadKey();
        }
    }
}
```

当上面的代码被编译和执行时，结果为：

```
变量 num： 3
```