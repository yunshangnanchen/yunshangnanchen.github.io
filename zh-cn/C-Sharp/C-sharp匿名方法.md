# C# 匿名方法

**一、匿名方法概述**

在 C# 中，匿名函数是一种没有名字的方法，可以在代码中定义和使用。匿名方法提供了一种传递代码块作为委托参数的技术。在匿名方法中不需要指定返回类型，它是从方法主体内的`return`语句推断的。

**二、Lambda 表达式**

Lambda 表达式是一个简洁的语法，用于创建匿名函数。它们通常用于 LINQ 查询和委托。

语法：
`(parameters) => expression` 或 `(parameters) => { statement; }`

例如：

```csharp
// 示例：使用 Lambda 表达式定义一个委托
Func<int, int, int> add = (a, b) => a + b;
Console.WriteLine(add(2, 3)); // 输出 5

// 示例：使用 Lambda 表达式过滤数组中的元素
int[] numbers = { 1, 2, 3, 4, 5 };
var evenNumbers = numbers.Where(n => n % 2 == 0);
foreach (var num in evenNumbers)
{
    Console.WriteLine(num); // 输出 2 4
}
```

**三、匿名方法**

匿名方法是通过使用`delegate`关键字创建委托实例来声明的。

语法：`delegate(parameters) { statement; }`

例如：

```csharp
delegate void NumberChanger(int n);
...
NumberChanger nc = delegate(int x)
{
    Console.WriteLine("Anonymous Method: {0}", x);
};
```

代码块`Console.WriteLine("Anonymous Method: {0}", x);`是匿名方法的主体。

委托可以通过匿名方法调用，也可以通过命名方法调用，即，通过向委托对象传递方法参数。

注意：匿名方法的主体后面需要一个`;`。

例如：

```csharp
nc(10);
```

以下是使用匿名方法的示例：

```csharp
// 示例：使用匿名方法定义一个委托
Func<int, int, int> multiply = delegate (int a, int b)
{
    return a * b;
};
Console.WriteLine(multiply(2, 3)); // 输出 6

// 示例：使用匿名方法作为事件处理程序
Button button = new Button();
button.Click += delegate (object sender, EventArgs e)
{
    Console.WriteLine("Button clicked!");
};
```

下面的实例演示了匿名方法的概念：

```csharp
using System;

delegate void NumberChanger(int n);
namespace DelegateAppl
{
    class TestDelegate
    {
        static int num = 10;
        public static void AddNum(int p)
        {
            num += p;
            Console.WriteLine("Named Method: {0}", num);
        }

        public static void MultNum(int q)
        {
            num *= q;
            Console.WriteLine("Named Method: {0}", num);
        }

        static void Main(string[] args)
        {
            // 使用匿名方法创建委托实例
            NumberChanger nc = delegate(int x)
            {
               Console.WriteLine("Anonymous Method: {0}", x);
            };
           
            // 使用匿名方法调用委托
            nc(10);

            // 使用命名方法实例化委托
            nc =  new NumberChanger(AddNum);
           
            // 使用命名方法调用委托
            nc(5);

            // 使用另一个命名方法实例化委托
            nc =  new NumberChanger(MultNum);
           
            // 使用命名方法调用委托
            nc(2);
            Console.ReadKey();
        }
    }
}
```

当上面的代码被编译和执行时，会产生以下结果：

`Anonymous Method: 10`

`Named Method: 15`

`Named Method: 30`

在 C# 2.0 及更高版本中，引入了 lambda 表达式，它是一种更简洁的语法形式，用于编写匿名方法。

例如：

```csharp
using System;

delegate void NumberChanger(int n);

namespace DelegateAppl
{
    class TestDelegate
    {
        static int num = 10;

        public static void AddNum(int p)
        {
            num += p;
            Console.WriteLine("Named Method: {0}", num);
        }

        public static void MultNum(int q)
        {
            num *= q;
            Console.WriteLine("Named Method: {0}", num);
        }

        static void Main(string[] args)
        {
            // 使用 lambda 表达式创建委托实例
            NumberChanger nc = x => Console.WriteLine($"Lambda Expression: {x}");

            // 使用 lambda 表达式调用委托
            nc(10);

            // 使用命名方法实例化委托
            nc = new NumberChanger(AddNum);

            // 使用命名方法调用委托
            nc(5);

            // 使用另一个命名方法实例化委托
            nc = new NumberChanger(MultNum);

            // 使用命名方法调用委托
            nc(2);

            Console.ReadKey();
        }
    }
}
```

总之，C#的匿名方法和 Lambda 表达式为编写简洁、灵活的代码提供了强大的工具，特别是在处理委托和事件时非常有用。