# C# 运算符

**一、概述**

运算符是一种告诉编译器执行特定的数学或逻辑操作的符号。C# 有丰富的内置运算符，分类如下：
1. 算术运算符
2. 关系运算符
3. 逻辑运算符
4. 位运算符
5. 赋值运算符
6. 其他运算符

本教程将逐一讲解这些运算符。

**二、算术运算符**

下表显示了 C# 支持的所有算术运算符。假设变量 A 的值为 10，变量 B 的值为 20，则：

|运算符|描述|实例|
|----|----|----|
|+|把两个操作数相加|A + B 将得到 30|
|-|从第一个操作数中减去第二个操作数|A - B 将得到 -10|
|*|把两个操作数相乘|A * B 将得到 200|
|/|分子除以分母|B / A 将得到 2|
|%|取模运算符，整除后的余数|B % A 将得到 0|
|++|自增运算符，整数值增加 1|A++ 将得到 11|
|--|自减运算符，整数值减少 1|A-- 将得到 9|

实例：

```csharp
using System;

namespace OperatorsAppl
{
    class Program
    {
        static void Main(string[] args)
        {
            int a = 21;
            int b = 10;
            int c;

            c = a + b;
            Console.WriteLine("Line 1 - c 的值是 {0}", c);
            c = a - b;
            Console.WriteLine("Line 2 - c 的值是 {0}", c);
            c = a * b;
            Console.WriteLine("Line 3 - c 的值是 {0}", c);
            c = a / b;
            Console.WriteLine("Line 4 - c 的值是 {0}", c);
            c = a % b;
            Console.WriteLine("Line 5 - c 的值是 {0}", c);

            // ++a 先进行自增运算再赋值
            c = ++a;
            Console.WriteLine("Line 6 - c 的值是 {0}", c);

            // 此时 a 的值为 22
            // --a 先进行自减运算再赋值
            c = --a;
            Console.WriteLine("Line 7 - c 的值是 {0}", c);
            Console.ReadLine();
        }
    }
}
```

当上面的代码被编译和执行时，结果为：

```
Line 1 - c 的值是 31
Line 2 - c 的值是 11
Line 3 - c 的值是 210
Line 4 - c 的值是 2
Line 5 - c 的值是 1
Line 6 - c 的值是 22
Line 7 - c 的值是 21
```

`c = a++`: 先将 a 赋值给 c，再对 a 进行自增运算。
`c = ++a`: 先将 a 进行自增运算，再将 a 赋值给 c 。
`c = a--`: 先将 a 赋值给 c，再对 a 进行自减运算。
`c = --a`: 先将 a 进行自减运算，再将 a 赋值给 c 。

**三、关系运算符**

下表显示了 C# 支持的所有关系运算符。假设变量 A 的值为 10，变量 B 的值为 20，则：

|运算符|描述|实例|
|----|----|----|
|==|检查两个操作数的值是否相等，如果相等则条件为真。|(A == B) 不为真。|
|!=|检查两个操作数的值是否相等，如果不相等则条件为真。|(A!= B) 为真。|
|>|检查左操作数的值是否大于右操作数的值，如果是则条件为真。|(A > B) 不为真。|
|<|检查左操作数的值是否小于右操作数的值，如果是则条件为真。|(A < B) 为真。|
|>=|检查左操作数的值是否大于或等于右操作数的值，如果是则条件为真。|(A >= B) 不为真。|
|<=|检查左操作数的值是否小于或等于右操作数的值，如果是则条件为真。|(A <= B) 为真。|

实例：

```csharp
using System;

class Program
{
    static void Main(string[] args)
    {
        int a = 21;
        int b = 10;

        if (a == b)
        {
            Console.WriteLine("Line 1 - a 等于 b");
        }
        else
        {
            Console.WriteLine("Line 1 - a 不等于 b");
        }
        if (a < b)
        {
            Console.WriteLine("Line 2 - a 小于 b");
        }
        else
        {
            Console.WriteLine("Line 2 - a 不小于 b");
        }
        if (a > b)
        {
            Console.WriteLine("Line 3 - a 大于 b");
        }
        else
        {
            Console.WriteLine("Line 3 - a 不大于 b");
        }
        /* 改变 a 和 b 的值 */
        a = 5;
        b = 20;
        if (a <= b)
        {
            Console.WriteLine("Line 4 - a 小于或等于 b");
        }
        if (b >= a)
        {
            Console.WriteLine("Line 5 - b 大于或等于 a");
        }
    }
}
```

当上面的代码被编译和执行时，结果为：

```
Line 1 - a 不等于 b
Line 2 - a 不小于 b
Line 3 - a 大于 b
Line 4 - a 小于或等于 b
Line 5 - b 大于或等于 a
```

**四、逻辑运算符**

下表显示了 C# 支持的所有逻辑运算符。假设变量 A 为布尔值 true，变量 B 为布尔值 false，则：

|运算符|描述|实例|
|----|----|----|
|&&|称为逻辑与运算符。如果两个操作数都非零，则条件为真。|(A && B) 为假。|
|&#124;&#124;|称为逻辑或运算符。如果两个操作数中有任意一个非零，则条件为真。|(A &#124;&#124; B) 为真。|
|!|称为逻辑非运算符。用来逆转操作数的逻辑状态。如果条件为真则逻辑非运算符将使其为假。|!(A && B) 为真。|

实例：

```csharp
using System;

namespace OperatorsAppl
{
    class Program
    {
        static void Main(string[] args)
        {
            bool a = true;
            bool b = true;

            if (a && b)
            {
                Console.WriteLine("Line 1 - 条件为真");
            }
            if (a || b)
            {
                Console.WriteLine("Line 2 - 条件为真");
            }
            /* 改变 a 和 b 的值 */
            a = false;
            b = true;
            if (a && b)
            {
                Console.WriteLine("Line 3 - 条件为真");
            }
            else
            {
                Console.WriteLine("Line 3 - 条件不为真");
            }
            if (!(a && b))
            {
                Console.WriteLine("Line 4 - 条件为真");
            }
            Console.ReadLine();
        }
    }
}
```

当上面的代码被编译和执行时，结果为：

```
Line 1 - 条件为真
Line 2 - 条件为真
Line 3 - 条件不为真
Line 4 - 条件为真
```

**五、位运算符**

位运算符作用于位，并逐位执行操作。&、| 和 ^ 的真值表如下所示：

|p|q|p & q|p &#124; q|p ^ q|
|----|----|----|----|----|
|0|0|0|0|0|
|0|1|0|1|1|
|1|1|1|1|0|
|1|0|0|1|1|

假设如果 A = 60，且 B = 13，现在以二进制格式表示，它们如下所示：

A = 0011 1100

B = 0000 1101

-----------------

A&B = 0000 1100

A|B = 0011 1101

A^B = 0011 0001

~A  = 1100 0011

下表列出了 C# 支持的位运算符。假设变量 A 的值为 60，变量 B 的值为 13，则：

|运算符|描述|实例|
|----|----|----|
|&|如果同时存在于两个操作数中，二进制 AND 运算符复制一位到结果中。|(A & B) 将得到 12，即为 0000 1100|
|&#124;|如果存在于任一操作数中，二进制 OR 运算符复制一位到结果中。|(A &#124; B) 将得到 61，即为 0011 1101|
|^|如果存在于其中一个操作数中但不同时存在于两个操作数中，二进制异或运算符复制一位到结果中。|(A ^ B) 将得到 49，即为 0011 0001|
|~|按位取反运算符是一元运算符，具有"翻转"位效果，即 0 变成 1，1 变成 0，包括符号位。|(~A ) 将得到 -61，即为 1100 0011，一个有符号二进制数的补码形式。|
|<<|二进制左移运算符。左操作数的值向左移动右操作数指定的位数。|A << 2 将得到 240，即为 1111 0000|
|>>|二进制右移运算符。左操作数的值向右移动右操作数指定的位数。|A >> 2 将得到 15，即为 0000 1111|

实例：

```csharp
using System;
namespace OperatorsAppl
{
    class Program
    {
        static void Main(string[] args)
        {
            int a = 60;            /* 60 = 0011 1100 */
            int b = 13;            /* 13 = 0000 1101 */
            int c = 0;

            c = a & b;           /* 12 = 0000 1100 */
            Console.WriteLine("Line 1 - c 的值是 {0}", c);

            c = a | b;           /* 61 = 0011 1101 */
            Console.WriteLine("Line 2 - c 的值是 {0}", c);

            c = a ^ b;           /* 49 = 0011 0001 */
            Console.WriteLine("Line 3 - c 的值是 {0}", c);

            c = ~a;               /*-61 = 1100 0011 */
            Console.WriteLine("Line 4 - c 的值是 {0}", c);

            c = a << 2;     /* 240 = 1111 0000 */
            Console.WriteLine("Line 5 - c 的值是 {0}", c);

            c = a >> 2;     /* 15 = 0000 1111 */
            Console.WriteLine("Line 6 - c 的值是 {0}", c);
            Console.ReadLine();
        }
    }
}
```

当上面的代码被编译和执行时，结果为：

```
Line 1 - c 的值是 12
Line 2 - c 的值是 61
Line 3 - c 的值是 49
Line 4 - c 的值是 -61
Line 5 - c 的值是 240
Line 6 - c 的值是 15
```

**六、赋值运算符**

下表列出了 C# 支持的赋值运算符：

|运算符|描述|实例|
|----|----|----|
|=|简单的赋值运算符，把右边操作数的值赋给左边操作数|C = A + B 将把 A + B 的值赋给 C|
|+=|加且赋值运算符，把右边操作数加上左边操作数的结果赋值给左边操作数|C += A 相当于 C = C + A|
|-=|减且赋值运算符，把左边操作数减去右边操作数的结果赋值给左边操作数|C -= A 相当于 C = C - A|
|*=|乘且赋值运算符，把右边操作数乘以左边操作数的结果赋值给左边操作数|C *= A 相当于 C = C * A|
|/=|除且赋值运算符，把左边操作数除以右边操作数的结果赋值给左边操作数|C /= A 相当于 C = C / A|
|%=|求模且赋值运算符，求两个操作数的模赋值给左边操作数|C %= A 相当于 C = C % A|
|<<=|左移且赋值运算符|C <<= 2 等同于 C = C << 2|
|>>=|右移且赋值运算符|C >>= 2 等同于 C = C >> 2|
|&=|按位与且赋值运算符|C &= 2 等同于 C = C & 2|
|^=|按位异或且赋值运算符|C ^= 2 等同于 C = C ^ 2|
|&#124;=|按位或且赋值运算符|C &#124;= 2 等同于 C = C &#124; 2|

实例：

```csharp
using System;

namespace OperatorsAppl
{
    class Program
    {
        static void Main(string[] args)
        {
            int a = 21;
            int c;

            c = a;
            Console.WriteLine("Line 1 - =  c 的值 = {0}", c);

            c += a;
            Console.WriteLine("Line 2 - += c 的值 = {0}", c);

            c -= a;
            Console.WriteLine("Line 3 - -=  c 的值 = {0}", c);

            c *= a;
            Console.WriteLine("Line 4 - *=  c 的值 = {0}", c);

            c /= a;
            Console.WriteLine("Line 5 - /=  c 的值 = {0}", c);

            c = 200;
            c %= a;
            Console.WriteLine("Line 6 - %=  c 的值 = {0}", c);

            c <<= 2;
            Console.WriteLine("Line 7 - <<=  c 的值 = {0}", c);

            c >>= 2;
            Console.WriteLine("Line 8 - >>=  c 的值 = {0}", c);

            c &= 2;
            Console.WriteLine("Line 9 - &=  c 的值 = {0}", c);

            c ^= 2;
            Console.WriteLine("Line 10 - ^=  c 的值 = {0}", c);

            c |= 2;
            Console.WriteLine("Line 11 - |=  c 的值 = {0}", c);
            Console.ReadLine();
        }
    }
}
```

当上面的代码被编译和执行时，结果为：

```
Line 1 - =     c 的值 = 21
Line 2 - +=    c 的值 = 42
Line 3 - -=    c 的值 = 21
Line 4 - *=    c 的值 = 441
Line 5 - /=    c 的值 = 21
Line 6 - %=    c 的值 = 11
Line 7 - <<=    c 的值 = 44
Line 8 - >>=    c 的值 = 11
Line 9 - &=    c 的值 = 2
Line 10 - ^=    c 的值 = 0
Line 11 - |=    c 的值 = 2
```

**七、其他运算符**

下表列出了 C# 支持的其他一些重要的运算符，包括 sizeof、typeof 和? :。

|运算符|描述|实例|
|----|----|----|
|sizeof()|返回数据类型的大小。|sizeof(int)，将返回 4.|
|typeof()|返回 class 的类型。|typeof(StreamReader);|
|&|返回变量的地址。|&a; 将得到变量的实际地址。|
|*|变量的指针。|*a; 将指向一个变量。|
|? :|条件表达式|如果条件为真? 则为 X : 否则为 Y|
|is|判断对象是否为某一类型。|If( Ford is Car) // 检查 Ford 是否是 Car 类的一个对象。|
|as|强制转换，即使转换失败也不会抛出异常。|Object obj = new StringReader("Hello");<br>StringReader r = obj as StringReader;|

实例：

```csharp
using System;

namespace OperatorsAppl
{

    class Program
    {
        static void Main(string[] args)
        {

            /*