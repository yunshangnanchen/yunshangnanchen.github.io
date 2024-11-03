# C# 属性（Property）

**一、属性概述**

C# 中的属性是类和结构体中用于封装数据的成员。它们提供了一种方式来定义类成员的访问和设置规则，通常用于隐藏字段的内部实现细节，同时提供控制数据访问的机制。

属性可以看作是对字段的包装器，通常由 get 和 set 访问器组成。属性不会确定存储位置，而是具有可读写或计算它们值的访问器。

**二、基本语法**

以下是一个属性的基本语法示例：

```csharp
public class Person
{
    private string name;

    public string Name
    {
        get { return name; }
        set { name = value; }
    }
}
```

在这个例子中，`Name`属性封装了私有字段`name`。`get`访问器用于获取字段值，而`set`访问器用于设置字段值。

**三、自动实现的属性**

如果只需要一个简单的属性，C# 允许使用自动实现的属性，这样不需要显式地定义字段。

```csharp
public class Person
{
    public string Name { get; set; }
}
```

在这种情况下，编译器会自动为`Name`属性生成一个私有的匿名字段来存储值。

**四、只读属性**

如果只需要一个只读属性，可以省略`set`访问器。

```csharp
public class Person
{
    public string Name { get; }

    public Person(string name)
    {
        Name = name;
    }
}
```

**五、只写属性**

类似地，如果只需要一个只写属性，可以省略`get`访问器。

```csharp
public class Person
{
    private string name;

    public string Name
    {
        set { name = value; }
    }
}
```

**六、自定义逻辑**

可以在`get`和`set`访问器中包含自定义的逻辑。

```csharp
public class Person
{
    private string name;

    public string Name
    {
        get { return name; }
        set
        {
            if (string.IsNullOrWhiteSpace(value))
                throw new ArgumentException("Name cannot be empty.");
            name = value;
        }
    }
}
```

**七、计算属性**

属性也可以是计算的，不依赖于字段。

```csharp
public class Rectangle
{
    public int Width { get; set; }
    public int Height { get; set; }

    public int Area
    {
        get { return Width * Height; }
    }
}
```

**八、访问器（Accessors）**

属性的访问器包含有助于获取（读取或计算）或设置（写入）属性的可执行语句。访问器声明可包含一个`get`访问器、一个`set`访问器，或者同时包含二者。

例如：

```csharp
// 声明类型为 string 的 Code 属性
public string Code
{
   get
   {
      return code;
   }
   set
   {
      code = value;
   }
}

// 声明类型为 string 的 Name 属性
public string Name
{
   get
   {
     return name;
   }
   set
   {
     name = value;
   }
}

// 声明类型为 int 的 Age 属性
public int Age
{
   get
   {
      return age;
   }
   set
   {
      age = value;
   }
}
```

**九、实例演示**

以下实例演示了属性的用法：

```csharp
using System;
namespace runoob
{
   class Student
   {

      private string code = "N.A";
      private string name = "not known";
      private int age = 0;

      // 声明类型为 string 的 Code 属性
      public string Code
      {
         get
         {
            return code;
         }
         set
         {
            code = value;
         }
      }
   
      // 声明类型为 string 的 Name 属性
      public string Name
      {
         get
         {
            return name;
         }
         set
         {
            name = value;
         }
      }

      // 声明类型为 int 的 Age 属性
      public int Age
      {
         get
         {
            return age;
         }
         set
         {
            age = value;
         }
      }
      public override string ToString()
      {
         return "Code = " + Code +", Name = " + Name + ", Age = " + Age;
      }
    }
    class ExampleDemo
    {
      public static void Main()
      {
         // 创建一个新的 Student 对象
         Student s = new Student();
           
         // 设置 student 的 code、name 和 age
         s.Code = "001";
         s.Name = "Zara";
         s.Age = 9;
         Console.WriteLine("Student Info: {0}", s);
         // 增加年龄
         s.Age += 1;
         Console.WriteLine("Student Info: {0}", s);
         Console.ReadKey();
       }
   }
}
```

当上面的代码被编译和执行时，会产生以下结果：

`Student Info: Code = 001, Name = Zara, Age = 9`

`Student Info: Code = 001, Name = Zara, Age = 10`

**十、抽象属性（Abstract Properties）**

抽象类可拥有抽象属性，这些属性应在派生类中被实现。下面的程序说明了这点：

```csharp
using System;
namespace Runoob
{
    public abstract class Person
    {
        public abstract string Name { get; set; }
        public abstract int Age { get; set; }
    }

    class Student : Person
    {
        // 声明自动实现的属性
        public string Code { get; set; } = "N.A";
        public override string Name { get; set; } = "N.A";
        public override int Age { get; set; } = 0;

        public override string ToString()
        {
            return $"Code = {Code}, Name = {Name}, Age = {Age}";
        }
    }

    class ExampleDemo
    {
        public static void Main()
        {
            // 创建一个新的 Student 对象
            Student s = new Student
            {
                Code = "001",
                Name = "Zara",
                Age = 9
            };

            Console.WriteLine("Student Info:- {0}", s);
           
            // 增加年龄
            s.Age += 1;
            Console.WriteLine("Student Info:- {0}", s);

            Console.ReadKey();
        }
    }
}
```

当上面的代码被编译和执行时，会产生以下结果：

`Student Info: Code = 001, Name = Zara, Age = 9`

`Student Info: Code = 001, Name = Zara, Age = 10`

总之，C#属性为数据封装和访问控制提供了一种灵活且强大的方式，可以根据不同的需求来定义和使用各种类型的属性。