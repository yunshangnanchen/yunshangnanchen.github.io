# C# 字符串（String）

**一、概述**

在 C# 中，可以使用字符数组来表示字符串，但更常见的是使用`string`关键字来声明一个字符串变量。`string`关键字是`System.String`类的别名。

**二、创建 String 对象**

可以使用以下方法之一来创建`string`对象：
1. 通过给`String`变量指定一个字符串。
2. 通过使用`String`类构造函数。
3. 通过使用字符串串联运算符（ + ）。
4. 通过检索属性或调用一个返回字符串的方法。
5. 通过格式化方法来转换一个值或对象为它的字符串表示形式。

例如：

```csharp
using System;

namespace StringApplication
{
    class Program
    {
        static void Main(string[] args)
        {
           //字符串，字符串连接
            string fname, lname;
            fname = "Rowan";
            lname = "Atkinson";

            string fullname = fname + lname;
            Console.WriteLine("Full Name: {0}", fullname);

            //通过使用 string 构造函数
            char[] letters = { 'H', 'e', 'l', 'l','o' };
            string greetings = new string(letters);
            Console.WriteLine("Greetings: {0}", greetings);

            //方法返回字符串
            string[] sarray = { "Hello", "From", "Tutorials", "Point" };
            string message = String.Join(" ", sarray);
            Console.WriteLine("Message: {0}", message);

            //用于转化值的格式化方法
            DateTime waiting = new DateTime(2012, 10, 10, 17, 58, 1);
            string chat = String.Format("Message sent at {0:t} on {0:D}",
            waiting);
            Console.WriteLine("Message: {0}", chat);
            Console.ReadKey() ;
        }
    }
}
```

当上面的代码被编译和执行时，结果为：

```
Full Name: RowanAtkinson
Greetings: Hello
Message: Hello From Tutorials Point
Message: Message sent at 17:58 on Wednesday, 10 October 2012
```

**三、String 类的属性**

`String`类有以下两个属性：
1. `Chars`：在当前`String`对象中获取`Char`对象的指定位置。
2. `Length`：在当前的`String`对象中获取字符数。

**四、String 类的方法**

|序号|方法名称|描述|
|----|----|----|
|1|`public static int Compare(string strA, string strB)`|区分大小写地比较两个指定字符串对象，返回其在排列顺序中的相对位置整数。|
|2|`public static int Compare(string strA, string strB, bool ignoreCase)`|可通过布尔参数控制是否区分大小写，对两个指定字符串对象进行比较并返回相对位置整数。|
|3|`public static string Concat(string str0, string str1)`|连接两个字符串对象。|
|4|`public static string Concat(string str0, string str1, string str2)`|连接三个字符串对象。|
|5|`public static string Concat(string str0, string str1, string str2, string str3)`|连接四个字符串对象。|
|6|`public bool Contains(string value)`|判断指定字符串是否存在于当前字符串中，返回布尔值。|
|7|`public static string Copy(string str)`|创建一个与指定字符串具有相同值的新`String`对象。|
|8|`public void CopyTo(int sourceIndex, char[] destination, int destinationIndex, int count)`|从字符串的指定位置开始，复制指定数量的字符到字符数组的指定位置。|
|9|`public bool EndsWith(string value)`|判断当前字符串的结尾是否与指定字符串匹配。|
|10|`public bool Equals(string value)`|判断当前字符串对象与指定字符串对象是否具有相同的值。|
|11|`public static bool Equals(string a, string b)`|静态方法，用于判断两个指定字符串对象是否相同。|
|12|`public static string Format(string format, Object arg0)`|将指定字符串中的格式项替换为指定对象的字符串表示形式。|
|13|`public int IndexOf(char value)`|返回指定字符在当前字符串中首次出现的索引。|
|14|`public int IndexOf(string value)`|返回指定字符串在当前实例中首次出现的索引。|
|15|`public int IndexOf(char value, int startIndex)`|从指定位置开始搜索指定字符在当前字符串中的首次出现索引。|
|16|`public int IndexOf(string value, int startIndex)`|从指定位置开始搜索指定字符串在当前实例中的首次出现索引。|
|17|`public int IndexOfAny(char[] anyOf)`|返回指定字符数组中的任意字符在当前实例中首次出现的索引。|
|18|`public int IndexOfAny(char[] anyOf, int startIndex)`|从指定位置开始搜索指定字符数组中的任意字符在当前实例中的首次出现索引。|
|19|`public string Insert(int startIndex, string value)`|在当前字符串的指定索引位置插入指定字符串，返回新的字符串。|
|20|`public static bool IsNullOrEmpty(string value)`|判断指定字符串是否为`null`或空字符串。|
|21|`public static string Join(string separator, string[] value)`|使用指定分隔符连接字符串数组中的所有元素。|
|22|`public static string Join(string separator, string[] value, int startIndex, int count)`|连接字符串数组中从指定位置开始的指定数量的元素，使用指定分隔符分隔。|
|23|`public int LastIndexOf(char value)`|返回指定字符在当前字符串中最后一次出现的索引。|
|24|`public int LastIndexOf(string value)`|返回指定字符串在当前字符串中最后一次出现的索引。|
|25|`public string Remove(int startIndex)`|从指定位置开始移除当前字符串的所有字符，返回新的字符串。|
|26|`public string Remove(int startIndex, int count)`|从指定位置开始移除指定数量的字符，返回新的字符串。|
|27|`public string Replace(char oldChar, char newChar)`|将当前字符串中的指定字符替换为另一个字符，返回新的字符串。|
|28|`public string Replace(string oldValue, string newValue)`|将当前字符串中的指定字符串替换为另一个字符串，返回新的字符串。|
|29|`public string[] Split(params char[] separator)`|使用指定字符数组中的元素分隔当前字符串，返回字符串数组。|
|30|`public string[] Split(char[] separator, int count)`|使用指定字符数组中的元素分隔当前字符串，返回指定最大数量的字符串数组。|
|31|`public bool StartsWith(string value)`|判断当前字符串的开头是否与指定字符串匹配。|
|32|`public char[] ToCharArray()`|返回包含当前字符串所有字符的字符数组。|
|33|`public char[] ToCharArray(int startIndex, int length)`|从指定索引开始，到指定长度为止，返回包含当前字符串部分字符的字符数组。|
|34|`public string ToLower()`|将当前字符串转换为小写形式并返回。|
|35|`public string ToUpper()`|将当前字符串转换为大写形式并返回。|
|36|`public string Trim()`|移除当前字符串的前导和后置空白字符，返回新的字符串。|

上面的方法列表并不详尽，请访问 MSDN 库，查看完整的方法列表和`String`类构造函数。

**五、实例分析**

1. 比较字符串：

```csharp
using System;

namespace StringApplication
{
   class StringProg
   {
      static void Main(string[] args)
      {
         string str1 = "This is test";
         string str2 = "This is text";

         if (String.Compare(str1, str2) == 0)
         {
            Console.WriteLine(str1 + " and " + str2 +  " are equal.");
         }
         else
         {
            Console.WriteLine(str1 + " and " + str2 + " are not equal.");
         }
         Console.ReadKey() ;
      }
   }
}
```

当上面的代码被编译和执行时，结果为：

```
This is test and This is text are not equal.
```

2. 字符串包含字符串：

```csharp
using System;

namespace StringApplication
{
   class StringProg
   {
      static void Main(string[] args)
      {
         string str = "This is test";
         if (str.Contains("test"))
         {
            Console.WriteLine("The sequence 'test' was found.");
         }
         Console.ReadKey() ;
      }
   }
}
```

当上面的代码被编译和执行时，结果为：

```
The sequence 'test' was found.
```

3. 获取子字符串：

```csharp
using System;
namespace StringApplication
{
        class StringProg
        {
                static void Main(string[] args)
                {
                        string str = "Last night I dreamt of San Pedro";
                        Console.WriteLine(str);
                        string substr = str.Substring(23);
                        Console.WriteLine(substr);
                        Console.ReadKey() ;
                }
        }
}
```

当上面的代码被编译和执行时，结果为：

```
Last night I dreamt of San Pedro
San Pedro
```

4. 连接字符串：

```csharp
using System;

namespace StringApplication
{
   class StringProg
   {
      static void Main(string[] args)
      {
         string[] starray = new string[]{"Down the way nights are dark",
         "And the sun shines daily on the mountain top",
         "I took a trip on a sailing ship",
         "And when I reached Jamaica",
         "I made a stop"};

         string str = String.Join("\n", starray);
         Console.WriteLine(str);
         Console.ReadKey() ;
      }
   }
}
```

当上面的代码被编译和执行时，结果为：

```
Down the way nights are dark
And the sun shines daily on the mountain top
I took a trip on a sailing ship
And when I reached Jamaica
I made a stop
```