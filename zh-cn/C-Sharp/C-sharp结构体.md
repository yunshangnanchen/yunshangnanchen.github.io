# C# 结构体（Struct）

**一、概述**

在 C# 中，结构体（struct）是一种值类型，用于组织和存储相关数据。结构体是值类型数据结构，使得一个单一变量可以存储各种数据类型的相关数据。`struct`关键字用于创建结构体。

**二、定义结构体**

为了定义一个结构体，必须使用`struct`语句。`struct`语句为程序定义了一个带有多个成员的新的数据类型。

例如：

```csharp
struct Books
{
   public string title;
   public string author;
   public string subject;
   public int book_id;
};  
```

以下程序演示了结构的用法：

```csharp
using System;
using System.Text;
     
struct Books
{
   public string title;
   public string author;
   public string subject;
   public int book_id;
};  

public class testStructure
{
   public static void Main(string[] args)
   {

      Books Book1;        /* 声明 Book1，类型为 Books */
      Books Book2;        /* 声明 Book2，类型为 Books */

      /* book 1 详述 */
      Book1.title = "C Programming";
      Book1.author = "Nuha Ali";
      Book1.subject = "C Programming Tutorial";
      Book1.book_id = 6495407;

      /* book 2 详述 */
      Book2.title = "Telecom Billing";
      Book2.author = "Zara Ali";
      Book2.subject =  "Telecom Billing Tutorial";
      Book2.book_id = 6495700;

      /* 打印 Book1 信息 */
      Console.WriteLine( "Book 1 title : {0}", Book1.title);
      Console.WriteLine("Book 1 author : {0}", Book1.author);
      Console.WriteLine("Book 1 subject : {0}", Book1.subject);
      Console.WriteLine("Book 1 book_id :{0}", Book1.book_id);

      /* 打印 Book2 信息 */
      Console.WriteLine("Book 2 title : {0}", Book2.title);
      Console.WriteLine("Book 2 author : {0}", Book2.author);
      Console.WriteLine("Book 2 subject : {0}", Book2.subject);
      Console.WriteLine("Book 2 book_id : {0}", Book2.book_id);      

      Console.ReadKey();

   }
}
```

当上面的代码被编译和执行时，结果为：

```
Book 1 title : C Programming
Book 1 author : Nuha Ali
Book 1 subject : C Programming Tutorial
Book 1 book_id : 6495407
Book 2 title : Telecom Billing
Book 2 author : Zara Ali
Book 2 subject : Telecom Billing Tutorial
Book 2 book_id : 6495700
```

**三、C# 结构的特点**

结构提供了一种轻量级的数据类型，适用于表示简单的数据结构，具有以下特点：
1. 可带有方法、字段、索引、属性、运算符方法和事件，适用于表示轻量级数据的情况，如坐标、范围、日期、时间等。
2. 可定义构造函数，但不能定义析构函数。且不能为结构定义无参构造函数，无参构造函数（默认）是自动定义的，且不能被改变。
3. 与类不同，结构不能继承其他的结构或类。
4. 结构不能作为其他结构或类的基础结构。
5. 结构可实现一个或多个接口。
6. 结构成员不能指定为`abstract`、`virtual`或`protected`。
7. 当使用`New`操作符创建一个结构对象时，会调用适当的构造函数来创建结构。与类不同，结构可以不使用`New`操作符即可被实例化。如果不使用`New`操作符，只有在所有的字段都被初始化之后，字段才被赋值，对象才被使用。
8. 结构变量通常分配在栈上，这使得它们的创建和销毁速度更快。但是，如果将结构用作类的字段，且这个类是引用类型，那么结构将存储在堆上。
9. 结构默认情况下是可变的，这意味着可以修改它们的字段。但是，如果结构定义为只读，那么它的字段将是不可变的。

**四、类 vs 结构**

类和结构在设计和使用时有不同的考虑因素：
1. **值类型 vs 引用类型**：
   - 结构是值类型：结构在栈上分配内存，当将结构实例传递给方法或赋值给另一个变量时，将复制整个结构的内容。
   - 类是引用类型：类在堆上分配内存，当将类实例传递给方法或赋值给另一个变量时，实际上是传递引用（内存地址）而不是整个对象的副本。
2. **继承和多态性**：
   - 结构不能继承：结构不能继承其他结构或类，也不能作为其他结构或类的基类。
   - 类支持继承：类支持继承和多态性，可以通过派生新类来扩展现有类的功能。
3. **默认构造函数**：
   - 结构不能有无参数的构造函数：每个结构都必须有至少一个有参数的构造函数。
   - 类可以有无参数的构造函数：如果没有提供构造函数，系统会提供默认的无参数构造函数。
4. **赋值行为**：
   - 结构变量在赋值时会复制整个结构，因此每个变量都有自己的独立副本。
   - 类型为类的变量在赋值时存储的是引用，因此两个变量指向同一个对象。
5. **传递方式**：
   - 结构对象通常通过值传递，在方法中对结构所做的更改不会影响到原始对象。
   - 类型为类的对象在方法调用时通过引用传递，在方法中对对象所做的更改会影响到原始对象。
6. **可空性**：
   - 结构体是值类型，不能直接设置为`null`，可以使用可空类型表示结构体变量的缺失或无效状态。
   - 类默认可为`null`，因为它们是引用类型。
7. **性能和内存分配**：
   - 结构通常更轻量，由于在栈上分配内存，适用于简单的数据表示。
   - 类可能有更多开销，由于在堆上分配内存，可能涉及更多的内存开销和管理。

例如：

```csharp
using System;

// 结构声明
struct MyStruct
{
    public int X;
    public int Y;

    // 结构不能有无参数的构造函数
    // public MyStruct()
    // {
    // }

    // 有参数的构造函数
    public MyStruct(int x, int y)
    {
        X = x;
        Y = y;
    }

    // 结构不能继承
    // struct MyDerivedStruct : MyBaseStruct
    // {
    // }
}

// 类声明
class MyClass
{
    public int X;
    public int Y;

    // 类可以有无参数的构造函数
    public MyClass()
    {
    }

    // 有参数的构造函数
    public MyClass(int x, int y)
    {
        X = x;
        Y = y;
    }

    // 类支持继承
    // class MyDerivedClass : MyBaseClass
    // {
    // }
}

class Program
{
    static void Main()
    {
        // 结构是值类型，分配在栈上
        MyStruct structInstance1 = new MyStruct(1, 2);
        MyStruct structInstance2 = structInstance1; // 复制整个结构

        // 类是引用类型，分配在堆上
        MyClass classInstance1 = new MyClass(3, 4);
        MyClass classInstance2 = classInstance1; // 复制引用，指向同一个对象

        // 修改结构实例不影响其他实例
        structInstance1.X = 5;
        Console.WriteLine($"Struct: {structInstance1.X}, {structInstance2.X}");

        // 修改类实例会影响其他实例
        classInstance1.X = 6;
        Console.WriteLine($"Class: {classInstance1.X}, {classInstance2.X}");
    }
}
```

针对上述讨论，重写前面的实例：

```csharp
using System;
using System.Text;
     
struct Books
{
   private string title;
   private string author;
   private string subject;
   private int book_id;
   public void setValues(string t, string a, string s, int id)
   {
      title = t;
      author = a;
      subject = s;
      book_id =id;
   }
   public void display()
   {
      Console.WriteLine("Title : {0}", title);
      Console.WriteLine("Author : {0}", author);
      Console.WriteLine("Subject : {0}", subject);
      Console.WriteLine("Book_id :{0}", book_id);
   }

};  

public class testStructure
{
   public static void Main(string[] args)
   {

      Books Book1 = new Books(); /* 声明 Book1，类型为 Books */
      Books Book2 = new Books(); /* 声明 Book2，类型为 Books */

      /* book 1 详述 */
      Book1.setValues("C Programming",
      "Nuha Ali", "C Programming Tutorial",6495407);

      /* book 2 详述 */
      Book2.setValues("Telecom Billing",
      "Zara Ali", "Telecom Billing Tutorial", 6495700);

      /* 打印 Book1 信息 */
      Book1.display();

      /* 打印 Book2 信息 */
      Book2.display();

      Console.ReadKey();

   }
}
```

当上面的代码被编译和执行时，结果为：

```
Title : C Programming
Author : Nuha Ali
Subject : C Programming Tutorial
Book_id : 6495407
Title : Telecom Billing
Author : Zara Ali
Subject : Telecom Billing Tutorial
Book_id : 6495700
```