# C# 循环

**一、概述**

有的时候，可能需要多次执行同一块代码。一般情况下，语句是顺序执行的，但编程语言提供了多种控制结构，其中循环语句允许我们多次执行一个语句或语句组。

**二、循环结构**

1. **while 循环**：当给定条件为真时，重复执行语句或语句组。它会在执行循环主体之前测试条件。
   - 例如：
   ```csharp
   int i = 0;
   while (i < 5)
   {
       Console.WriteLine(i);
       i++;
   }
   ```

2. **for/foreach 循环**：多次执行一个语句序列，并且可以简化管理循环变量的代码。
   - `for`循环示例：
   ```csharp
   for (int j = 0; j < 3; j++)
   {
       Console.WriteLine(j);
   }
   ```
   - `foreach`循环通常用于遍历集合，比如数组：
   ```csharp
   int[] numbers = { 1, 2, 3, 4, 5 };
   foreach (int number in numbers)
   {
       Console.WriteLine(number);
   }
   ```

3. **do...while 循环**：除了它是在循环主体结尾测试条件外，其他与`while`语句类似。
   - 例如：
   ```csharp
   int k = 0;
   do
   {
       Console.WriteLine(k);
       k++;
   } while (k < 3);
   ```

4. **嵌套循环**：可以在`while`、`for`或`do..while`循环内使用一个或多个循环。
   - 例如：
   ```csharp
   for (int m = 0; m < 3; m++)
   {
       for (int n = 0; n < 2; n++)
       {
           Console.WriteLine($"m={m}, n={n}");
       }
   }
   ```

**三、循环控制语句**

循环控制语句可以更改执行的正常序列。当执行离开一个范围时，所有在该范围中创建的自动对象都会被销毁。

1. **break 语句**：终止`loop`或`switch`语句，程序流将继续执行紧接着`loop`或`switch`的下一条语句。
   - 例如，在`for`循环中使用`break`：
   ```csharp
   for (int p = 0; p < 10; p++)
   {
       if (p == 5)
       {
           break;
       }
       Console.WriteLine(p);
   }
   ```

2. **continue 语句**：跳过本轮循环，开始下一轮循环。
   - 例如，在`for`循环中使用`continue`：
   ```csharp
   for (int q = 0; q < 10; q++)
   {
       if (q % 2 == 0)
       {
           continue;
       }
       Console.WriteLine(q);
   }
   ```

**四、无限循环**

如果条件永远不为假，则循环将变成无限循环。`for`循环在传统意义上可用于实现无限循环。由于构成循环的三个表达式中任何一个都不是必需的，您可以将某些条件表达式留空来构成一个无限循环。

例如：
```csharp
using System;

namespace Loops
{
    class Program
    {
        static void Main(string[] args)
        {
            for (; ; )
            {
                Console.WriteLine("Hey! I am Trapped");
            }
        }
    }
}
```

当条件表达式不存在时，它被假设为真。您也可以设置一个初始值和增量表达式，但是一般情况下，程序员偏向于使用`for(;;)`结构来表示一个无限循环。