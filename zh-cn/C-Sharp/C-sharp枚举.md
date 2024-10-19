# C# 枚举（Enum）

**一、概述**

枚举是一组命名整型常量。枚举类型是使用`enum`关键字声明的。C# 枚举是值类型，即枚举包含自己的值，且不能继承或传递继承。

**二、声明 enum 变量**

声明枚举的一般语法：

```csharp
enum <enum_name>
{ 
    enumeration list 
};
```

其中：
- `enum_name`指定枚举的类型名称。
- `enumeration list`是一个用逗号分隔的标识符列表。枚举列表中的每个符号代表一个整数值，一个比它前面的符号大的整数值。默认情况下，第一个枚举符号的值是 0。

例如：

```csharp
enum Days { Sun, Mon, tue, Wed, thu, Fri, Sat };
```

**三、实例分析**

下面的实例演示了枚举变量的用法：

```csharp
using System;

public class EnumTest
{
    enum Day { Sun, Mon, Tue, Wed, Thu, Fri, Sat };

    static void Main()
    {
        int x = (int)Day.Sun;
        int y = (int)Day.Fri;
        Console.WriteLine("Sun = {0}", x);
        Console.WriteLine("Fri = {0}", y);
    }
}
```

当上面的代码被编译和执行时，结果为：

```
Sun = 0
Fri = 5
```