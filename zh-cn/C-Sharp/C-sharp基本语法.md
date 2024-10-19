# C# 基本语法

## **一、面向对象编程与示例**

C# 是一种面向对象的编程语言。在面向对象的程序设计方法中，程序由各种相互交互的对象组成。相同种类的对象通常具有相同的类型，或者说，是在相同的 class 中。

例如，以 Rectangle（矩形）对象为例。它具有 length 和 width 属性，可能需要接受这些属性值、计算面积和显示细节。

以下是一个 Rectangle（矩形）类的实现及对 C# 基本语法的展示：

```csharp
using System;
namespace RectangleApplication
{
    class Rectangle
    {
        // 成员变量
        double length;
        double width;
        public void Acceptdetails()
        {
            length = 4.5;    
            width = 3.5;
        }
        public double GetArea()
        {
            return length * width;
        }
        public void Display()
        {
            Console.WriteLine("Length: {0}", length);
            Console.WriteLine("Width: {0}", width);
            Console.WriteLine("Area: {0}", GetArea());
        }
    }
   
    class ExecuteRectangle
    {
        static void Main(string[] args)
        {
            Rectangle r = new Rectangle();
            r.Acceptdetails();
            r.Display();
            Console.ReadLine();
        }
    }
}
```

当上面的代码被编译和执行时，结果为：

```
Length: 4.5
Width: 3.5
Area: 15.75
```

## **二、关键语法元素解析**

1. `using`关键字：
   - 在任何 C# 程序中的第一条语句通常是`using System;`。`using`关键字用于在程序中包含命名空间。一个程序可以包含多个`using`语句。

2. `class`关键字：
   - `class`关键字用于声明一个类。

3. C# 中的注释：
   - 多行注释以`/*`开始，并以字符`*/`终止。例如：`/* 这个程序演示 C# 的注释使用 */`。
   - 单行注释是用`//`符号表示。例如：`// 这一行是注释`。

4. 成员变量：
   - 变量是类的属性或数据成员，用于存储数据。在上面的程序中，Rectangle 类有两个成员变量，名为 length 和 width。

5. 成员函数：
   - 函数是一系列执行指定任务的语句。类的成员函数是在类内声明的。如 Rectangle 类包含了三个成员函数：AcceptDetails、GetArea 和 Display。

6. 实例化一个类：
   - 在上面的程序中，类 ExecuteRectangle 是一个包含 Main() 方法和实例化 Rectangle 类的类。

7. 标识符：
   - 标识符是用来识别类、变量、函数或任何其它用户定义的项目。在 C# 中，类的命名必须遵循一定规则：
     - 标识符必须以字母、下划线或`@`开头，后面可以跟一系列的字母、数字（0 - 9）、下划线（_）、`@`。
     - 标识符中的第一个字符不能是数字。
     - 标识符必须不包含任何嵌入的空格或符号，比如`? - +! # % ^ & * ( ) [ ] { }. ; : " ' / \`。
     - 标识符不能是 C# 关键字。除非它们有一个`@`前缀。例如，`@if`是有效的标识符，但`if`不是，因为`if`是关键字。
     - 标识符必须区分大小写。大写字母和小写字母被认为是不同的字母。
     - 不能与 C# 的类库名称相同。

8. C# 关键字：
   - 关键字是 C# 编译器预定义的保留字。这些关键字不能用作标识符，但是，如果想使用这些关键字作为标识符，可以在关键字前面加上`@`字符作为前缀。
   - 在 C# 中，有些关键字在代码的上下文中有特殊的意义，如`get`和`set`，这些被称为上下文关键字。

## **三、顶级语句（Top-Level Statements）**

在 C# 9.0 版本中，引入了顶级语句的概念。

1. 特点：
   - 无需类或方法：顶级语句允许直接在文件的顶层编写代码，无需定义类或方法。
   - 文件作为入口点：包含顶级语句的文件被视为程序的入口点，类似于 C# 之前的 Main 方法。
   - 自动 Main 方法：编译器会自动生成一个 Main 方法，并将顶级语句作为 Main 方法的主体。
   - 支持局部函数：尽管不需要定义类，但顶级语句的文件中仍然可以定义局部函数。
   - 更好的可读性：对于简单的脚本或工具，顶级语句提供了更好的可读性和简洁性。
   - 适用于小型项目：顶级语句非常适合小型项目或脚本，可以快速编写和运行代码。
   - 与现有代码兼容：顶级语句可以与现有的 C# 代码库一起使用，不会影响现有代码。

2. 示例对比：
   - 传统 C# 代码：
```csharp
using System;

namespace MyApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
        }
    }
}
```
   - 使用顶级语句的 C# 代码：
```csharp
using System;

Console.WriteLine("Hello, World!");
```

顶级语句支持所有常见的 C# 语法，包括声明变量、定义方法、处理异常等。

例如：
```csharp
using System;
using System.Linq;

// 顶级语句中的变量声明
int number = 42;
string message = "The answer to life, the universe, and everything is";

// 输出变量
Console.WriteLine($"{message} {number}.");

// 定义和调用方法
int Add(int a, int b) => a + b;
Console.WriteLine($"Sum of 1 and 2 is {Add(1, 2)}.");

// 使用 LINQ
var numbers = new[] { 1, 2, 3, 4, 5 };
var evens = numbers.Where(n => n % 2 == 0).ToArray();
Console.WriteLine("Even numbers: " + string.Join(", ", evens));

// 异常处理
try
{
    int zero = 0;
    int result = number / zero;
}
catch (DivideByZeroException ex)
{
    Console.WriteLine("Error: " + ex.Message);
}
```

## **四、注意事项**

1. 文件限制：顶级语句只能在一个源文件中使用。如果在一个项目中有多个使用顶级语句的文件，会导致编译错误。
2. 程序入口：如果使用顶级语句，则该文件会隐式地包含 Main 方法，并且该文件将成为程序的入口点。
3. 作用域限制：顶级语句中的代码共享一个全局作用域，这意味着可以在顶级语句中定义的变量和方法可以在整个文件中访问。

顶级语句在简化代码结构、降低学习难度和加快开发速度方面具有显著优势，特别适合于编写简单程序和脚本。