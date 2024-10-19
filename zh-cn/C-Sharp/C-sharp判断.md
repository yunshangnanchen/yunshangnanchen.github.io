# C# 判断结构

**一、概述**

判断结构在编程中至关重要，它允许程序员根据特定条件来决定程序的执行路径。在 C#中，判断结构要求程序员指定一个或多个要评估或测试的条件，以及条件为真时要执行的语句（必需的）和条件为假时可执行的语句（可选的）。

**二、C#中的判断语句类型**

1. **if 语句**：
   - 由一个布尔表达式后跟一个或多个语句组成。当布尔表达式的值为 true 时，执行其后的语句。
   - 例如：
   ```csharp
   int num = 10;
   if (num > 5)
   {
       Console.WriteLine("Number is greater than 5.");
   }
   ```

2. **if...else 语句**：
   - 在 if 语句的基础上，增加了一个可选的 else 语句块。当 if 语句中的布尔表达式为假时，执行 else 语句块中的内容。
   - 例如：
   ```csharp
   int num = 3;
   if (num > 5)
   {
       Console.WriteLine("Number is greater than 5.");
   }
   else
   {
       Console.WriteLine("Number is not greater than 5.");
   }
   ```

3. **嵌套 if 语句**：
   - 可以在一个 if 或 else if 语句内使用另一个 if 或 else if 语句。这种结构允许根据多个条件进行逐步判断。
   - 例如：
   ```csharp
   int num = 15;
   if (num > 10)
   {
       if (num < 20)
       {
           Console.WriteLine("Number is between 10 and 20.");
       }
   }
   ```

4. **switch 语句**：
   - 允许测试一个变量等于多个值时的情况。与多个 if...else if 语句相比，switch 语句在处理多个离散值的情况时更加清晰和高效。
   - 例如：
   ```csharp
   int dayOfWeek = 3;
   switch (dayOfWeek)
   {
       case 1:
           Console.WriteLine("Monday");
           break;
       case 2:
           Console.WriteLine("Tuesday");
           break;
       case 3:
           Console.WriteLine("Wednesday");
           break;
       default:
           Console.WriteLine("Other day");
           break;
   }
   ```

5. **嵌套 switch 语句**：
   - 可以在一个 switch 语句内使用另一个 switch 语句。这种结构在处理复杂的条件判断时可能会用到，但应谨慎使用以避免代码过于复杂。

**三、? : 运算符（条件运算符）**

条件运算符`? :`可以用来替代简单的 if...else 语句。其一般形式为`Exp1? Exp2 : Exp3`，其中`Exp1`、`Exp2`和`Exp3`是表达式。

- 如果`Exp1`为真，则计算`Exp2`的值，结果即为整个表达式的值。
- 如果`Exp1`为假，则计算`Exp3`的值，结果即为整个表达式的值。

例如：
```csharp
int num = 8;
string result = num > 5? "Number is greater than 5." : "Number is not greater than 5.";
Console.WriteLine(result);
```

>举例 下面是阶乘的递归算法，其中判断条件如果 num>0 则返回 num *Jc(num - 1)，否则返回 1。
```
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace jiecheng
{
    class jiecheng
    {
        public int Jc(int num)
        {
            
            return num > 0 ? num *Jc(num - 1):1;  //如果num>0则返回num *Jc(num - 1)，否则返回1
        }
    }




    class excutejiecheng
  
    {
        static void Main(string[] args)
        {
            jiecheng n = new jiecheng();
            int result = n.Jc(Convert.ToInt16(Console.ReadLine()));
            Console.WriteLine("result is {0}",result);
            Console.ReadKey();
        }
    }
}
```