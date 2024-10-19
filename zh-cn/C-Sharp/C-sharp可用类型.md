# C# 可空类型（Nullable）

**一、概述**

C# 单问号`?`与双问号`??`：
- `?`单问号用于对`int`、`double`、`bool`等无法直接赋值为`null`的数据类型进行`null`的赋值，意思是这个数据类型是`Nullable`类型的。
- `??`双问号用于判断一个变量在为`null`的时候返回一个指定的值。

C# 提供了可空类型（nullable 类型），可空类型可以表示其基础值类型正常范围内的值，再加上一个`null`值。

**二、声明可空类型**

声明一个可空类型的语法如下：

`<data_type>? <variable_name> = null;`

例如：

```csharp
using System;
namespace CalculatorApplication
{
   class NullablesAtShow
   {
      static void Main(string[] args)
      {
         int? num1 = null;
         int? num2 = 45;
         double? num3 = new double?();
         double? num4 = 3.14157;
         
         bool? boolval = new bool?();

         // 显示值
         
         Console.WriteLine("显示可空类型的值： {0}, {1}, {2}, {3}",
                            num1, num2, num3, num4);
         Console.WriteLine("一个可空的布尔值： {0}", boolval);
         Console.ReadLine();

      }
   }
}
```

当上面的代码被编译和执行时，结果为：

```
显示可空类型的值：, 45, , 3.14157
一个可空的布尔值：
```

**三、Null 合并运算符（??）**

Null 合并运算符用于定义可空类型和引用类型的默认值。如果第一个操作数的值为`null`，则运算符返回第二个操作数的值，否则返回第一个操作数的值。

例如：

```csharp
using System;
namespace CalculatorApplication
{
   class NullablesAtShow
   {
         
      static void Main(string[] args)
      {
         
         double? num1 = null;
         double? num2 = 3.14157;
         double num3;
         num3 = num1?? 5.34;      // num1 如果为空值则返回 5.34
         Console.WriteLine("num3 的值： {0}", num3);
         num3 = num2?? 5.34;
         Console.WriteLine("num3 的值： {0}", num3);
         Console.ReadLine();

      }
   }
}
```

当上面的代码被编译和执行时，结果为：

```
num3 的值： 5.34
num3 的值： 3.14157
```