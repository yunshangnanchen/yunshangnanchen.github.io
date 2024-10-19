# C# 类型转换

**一、概述**

在 C# 中，类型转换是将一个数据类型的值转换为另一个数据类型的过程。C# 中的类型转换可以分为两种：隐式类型转换和显式类型转换（也称为强制类型转换）。

**二、隐式类型转换**

隐式转换是不需要编写代码来指定的转换，编译器会自动进行。隐式转换是指将一个较小范围的数据类型转换为较大范围的数据类型时，编译器会自动完成类型转换，这些转换是 C# 默认的以安全方式进行的转换，不会导致数据丢失。

例如，从 `int` 到 `long`，从 `float` 到 `double`等。从小的整数类型转换为大的整数类型，从派生类转换为基类。将一个 `byte` 类型的变量赋值给 `int` 类型的变量，编译器会自动将 `byte` 类型转换为 `int` 类型，不需要显式转换。

```csharp
byte b = 10;
int i = b; // 隐式转换，不需要显式转换
```

将一个整数赋值给一个长整数，或者将一个浮点数赋值给一个双精度浮点数，这种转换不会导致数据丢失：

```csharp
int intValue = 42;
long longValue = intValue; // 隐式转换，从 int 到 long
```

**三、显式类型转换**

显式类型转换，即强制类型转换，需要程序员在代码中明确指定。显式转换是指将一个较大范围的数据类型转换为较小范围的数据类型时，或者将一个对象类型转换为另一个对象类型时，需要使用强制类型转换符号进行显式转换，强制转换会造成数据丢失。

例如，将一个 `int` 类型的变量赋值给 `byte` 类型的变量，需要显式转换。

```csharp
int i = 10;
byte b = (byte)i; // 显式转换，需要使用强制类型转换符号
```

强制转换为整数类型：

```csharp
double doubleValue = 3.14;
int intValue = (int)doubleValue; // 强制从 double 到 int，数据可能损失小数部分
```

强制转换为浮点数类型：

```csharp
int intValue = 42;
float floatValue = (float)intValue; // 强制从 int 到 float，数据可能损失精度
```

强制转换为字符串类型：

```csharp
int intValue = 123;
string stringValue = intValue.ToString(); // 将 int 转换为字符串
```

下面的实例显示了一个显式的类型转换：

```csharp
using System;

namespace TypeConversionApplication
{
    class ExplicitConversion
    {
        static void Main(string[] args)
        {
            double d = 5673.74;
            int i;

            // 强制转换 double 为 int
            i = (int)d;
            Console.WriteLine(i);
            Console.ReadKey();
           
        }
    }
}
```

当上面的代码被编译和执行时，结果为：

```
5673
```

**四、C# 类型转换方法**

C# 提供了下列内置的类型转换方法：

|序号|方法 & 描述|
|----|----|
|1|ToBoolean|如果可能的话，把类型转换为布尔型。|
|2|ToByte|把类型转换为字节类型。|
|3|ToChar|如果可能的话，把类型转换为单个 Unicode 字符类型。|
|4|ToDateTime|把类型（整数或字符串类型）转换为日期 - 时间结构。|
|5|ToDecimal|把浮点型或整数类型转换为十进制类型。|
|6|ToDouble|把类型转换为双精度浮点型。|
|7|ToInt16|把类型转换为 16 位整数类型。|
|8|ToInt32|把类型转换为 32 位整数类型。|
|9|ToInt64|把类型转换为 64 位整数类型。|
|10|ToSbyte|把类型转换为有符号字节类型。|
|11|ToSingle|把类型转换为小浮点数类型。|
|12|ToString|把类型转换为字符串类型。|
|13|ToType|把类型转换为指定类型。|
|14|ToUInt16|把类型转换为 16 位无符号整数类型。|
|15|ToUInt32|把类型转换为 32 位无符号整数类型。|
|16|ToUInt64|把类型转换为 64 位无符号整数类型。|

这些方法都定义在 `System.Convert` 类中，使用时需要包含 `System` 命名空间。它们提供了一种安全的方式来执行类型转换，因为它们可以处理 `null` 值，并且会抛出异常，如果转换不可能进行。

例如，使用 `Convert.ToInt32` 方法将字符串转换为整数：

```csharp
string str = "123";
int number = Convert.ToInt32(str); // 转换成功，number 为 123
```

如果字符串不是有效的整数表示，`Convert.ToInt32` 将抛出 `FormatException`。

下面的实例把不同值的类型转换为字符串类型：

```csharp
using System;

namespace TypeConversionApplication
{
    class StringConversion
    {
        static void Main(string[] args)
        {
            // 定义一个整型变量
            int i = 75;
           
            // 定义一个浮点型变量
            float f = 53.005f;
           
            // 定义一个双精度浮点型变量
            double d = 2345.7652;
           
            // 定义一个布尔型变量
            bool b = true;

            // 将整型变量转换为字符串并输出
            Console.WriteLine(i.ToString());
           
            // 将浮点型变量转换为字符串并输出
            Console.WriteLine(f.ToString());
           
            // 将双精度浮点型变量转换为字符串并输出
            Console.WriteLine(d.ToString());
           
            // 将布尔型变量转换为字符串并输出
            Console.WriteLine(b.ToString());

            // 等待用户按键后关闭控制台窗口
            Console.ReadKey();
        }
    }
}
```

当上面的代码被编译和执行时，结果为：

```
75
53.005
2345.7652
True
```

**五、注意事项**

在进行类型转换时需要注意以下几点：
1. 隐式转换只能将较小范围的数据类型转换为较大范围的数据类型，不能将较大范围的数据类型转换为较小范围的数据类型。
2. 显式转换可能会导致数据丢失或精度降低，需要进行数据类型的兼容性检查。
3. 对于对象类型的转换，需要进行类型转换的兼容性检查和类型转换的安全性检查。

**六、类型转换方法**

C# 提供了多种类型转换方法，例如使用 `Convert` 类、`Parse` 方法和 `TryParse` 方法，这些方法可以帮助处理不同的数据类型之间的转换。

1. 使用 `Convert` 类：
   - `Convert` 类提供了一组静态方法，可以在各种基本数据类型之间进行转换。
   - 实例：`string str = "123"; int num = Convert.ToInt32(str);`

2. 使用 `Parse` 方法：
   - `Parse` 方法用于将字符串转换为对应的数值类型，如果转换失败会抛出异常。
   - 实例：`string str = "123.45"; double d = double.Parse(str);`

3. 使用 `TryParse` 方法：
   - `TryParse` 方法类似于 `Parse`，但它不会抛出异常，而是返回一个布尔值指示转换是否成功。
   - 实例：`string str = "123.45"; double d; bool success = double.TryParse(str, out d);`
   - 如果转换成功：`Console.WriteLine("转换成功: " + d);`，否则：`Console.WriteLine("转换失败");`

**七、自定义类型转换**

C# 还允许你定义自定义类型转换操作，通过在类型中定义 `implicit` 或 `explicit` 关键字。

```csharp
using System;

public class Fahrenheit
{
    public double Degrees { get; set; }

    public Fahrenheit(double degrees)
    {
        Degrees = degrees;
    }

    // 隐式转换从 Fahrenheit 到 double
    public static implicit operator double(Fahrenheit f)
    {
        return f.Degrees;
    }

    // 显式转换从 double 到 Fahrenheit
    public static explicit operator Fahrenheit(double d)
    {
        return new Fahrenheit(d);
    }
}

public class Program
{
    public static void Main()
    {
        Fahrenheit f = new Fahrenheit(98.6);
        Console.WriteLine("Fahrenheit object: " + f.Degrees + " degrees");

        double temp = f; // 隐式转换
        Console.WriteLine("After implicit conversion to double: " + temp + " degrees");

        Fahrenheit newF = (Fahrenheit)temp; // 显式转换
        Console.WriteLine("After explicit conversion back to Fahrenheit: " + newF.Degrees + " degrees");
    }
}
```

以上例子中，我们定义了一个 `Fahrenheit` 类，并实现了从 `Fahrenheit` 到 `double` 的隐式转换和从 `double` 到 `Fahrenheit` 的显式转换。

输出结果将显示如下：

```
Fahrenheit object: 98.6 degrees
After implicit conversion to double: 98.6 degrees
After explicit conversion back to Fahrenheit: 98.6 degrees
```

**八、总结**

在 C# 中，内置的类型转换方法主要通过以下几种方式实现：隐式转换、显式转换（强制转换）、使用 `Convert` 类的方法、`Parse` 方法和 `TryParse` 方法，这些方法广泛应用于不同数据类型之间的转换。

以下是 C# 内置类型转换方法的表格：

以下是美化后的 Markdown 文档内容：

**一、类型转换方法的奇幻之旅**

|方法类别|方法|描述|
|:---|:---|:---|
|隐式转换|自动进行的转换|自动且悄然地进行，无需刻意地显式指定。通常在安全可靠的类型转换情境中绽放光芒，就如同从精致小巧的较小类型优雅从容地迈向宏大壮阔的较大类型，过程如诗如画，丝滑流畅。|
|显式转换（强制转换）|(type)value|格式呈现为`(type)value`。常常在可能引发数据丢失或转换失败的惊险情境下被召唤。例如，当把一个庞大无比的整数强行转换为较小的整数类型时，仿佛进行一场惊心动魄的冒险，稍有不慎就可能痛失高位数据。|
|Convert 类方法|Convert.ToBoolean(value)|如同万能的魔法钥匙，能够将指定类型转换为 Boolean 类型。|
| |Convert.ToByte(value)|将指定类型转换为 Byte。|
| |Convert.ToChar(value)|将指定类型转换为 Char。|
| |Convert.ToDateTime(value)|将指定类型转换为 DateTime。|
| |Convert.ToDecimal(value)|将指定类型转换为 Decimal。|
| |Convert.ToDouble(value)|将指定类型转换为 Double。|
| |Convert.ToInt16(value)|将指定类型转换为 Int16（短整型）。|
| |Convert.ToInt32(value)|将指定类型转换为 Int32（整型）。|
| |Convert.ToInt64(value)|将指定类型转换为 Int64（长整型）。|
| |Convert.ToSByte(value)|将指定类型转换为 SByte。|
| |Convert.ToSingle(value)|将指定类型转换为 Single（单精度浮点型）。|
| |Convert.ToString(value)|将指定类型转换为 String。|
| |Convert.ToUInt16(value)|将指定类型转换为 UInt16（无符号短整型）。|
| |Convert.ToUInt32(value)|将指定类型转换为 UInt32（无符号整型）。|
| |Convert.ToUInt64(value)|将指定类型转换为 UInt64（无符号长整型）。|
|Parse 方法|Boolean.Parse(string)|像一位严谨专业的翻译大师，将字符串精心解析为对应的布尔类型。这些方法要求输入为字符串，并全力以赴地尝试将其转换为指定的类型。然而，如果输入的字符串格式有误，就可能引发一场小小的风暴，抛出异常。|
| |Byte.Parse(string)|将字符串解析为 Byte。|
| |Char.Parse(string)|将字符串解析为 Char。|
| |DateTime.Parse(string)|将字符串解析为 DateTime。|
| |Decimal.Parse(string)|将字符串解析为 Decimal。|
| |Double.Parse(string)|将字符串解析为 Double。|
| |Int16.Parse(string)|将字符串解析为 Int16。|
| |Int32.Parse(string)|将字符串解析为 Int32。|
| |Int64.Parse(string)|将字符串解析为 Int64。|
| |SByte.Parse(string)|将字符串解析为 SByte。|
| |Single.Parse(string)|将字符串解析为 Single。|
| |UInt16.Parse(string)|将字符串解析为 UInt16。|
| |UInt32.Parse(string)|将字符串解析为 UInt32。|
| |UInt64.Parse(string)|将字符串解析为 UInt64。|
|TryParse 方法|Boolean.TryParse(string, out bool)|宛如一位谨慎细致的探索者，小心翼翼地尝试将字符串解析为指定类型，并通过输出参数温柔地返回转换是否成功的结果。这种方法在处理可能无效的输入时，犹如一位贴心守护的卫士，能够避免抛出异常，极大地提高了程序的稳定性。|
| |Byte.TryParse(string, out byte)|尝试将字符串解析为 Byte，返回布尔值表示是否成功。|
| |Char.TryParse(string, out char)|尝试将字符串解析为 Char，返回布尔值表示是否成功。|
| |DateTime.TryParse(string, out DateTime)|尝试将字符串解析为 DateTime，返回布尔值表示是否成功。|
| |Decimal.TryParse(string, out decimal)|尝试将字符串解析为 Decimal，返回布尔值表示是否成功。|
| |Double.TryParse(string, out double)|尝试将字符串解析为 Double，返回布尔值表示是否成功。|
| |Int16.TryParse(string, out short)|尝试将字符串解析为 Int16，返回布尔值表示是否成功。|
| |Int32.TryParse(string, out int)|尝试将字符串解析为 Int32，返回布尔值表示是否成功。|
| |Int64.TryParse(string, out long)|尝试将字符串解析为 Int64，返回布尔值表示是否成功。|
| |SByte.TryParse(string, out sbyte)|尝试将字符串解析为 SByte，返回布尔值表示是否成功。|
| |Single.TryParse(string, out float)|尝试将字符串解析为 Single，返回布尔值表示是否成功。|
| |UInt16.TryParse(string, out ushort)|尝试将字符串解析为 UInt16，返回布尔值表示是否成功。|
| |UInt32.TryParse(string, out uint)|尝试将字符串解析为 UInt32，返回布尔值表示是否成功。|
| |UInt64.TryParse(string, out ulong)|尝试将字符串解析为 UInt64，返回布尔值表示是否成功。|