# C# 继承

**一、概述**

继承是面向对象程序设计中最重要的概念之一。它允许根据一个类来定义另一个类，使得创建和维护应用程序变得更容易，同时有利于重用代码和节省开发时间。

**二、基类和派生类**

一个类可以继承自另一个类，被称为基类（父类）和派生类（子类）。

1. C# 不支持类的多重继承，但支持接口的多重继承，一个类可以实现多个接口。即一个类可以继承多个接口，但只能继承自一个类。
2. 创建派生类的语法如下：

```csharp
<访问修饰符> class <基类>
{
...
}
class <派生类> : <基类>
{
...
}
```

派生类会继承基类的成员（字段、方法、属性等），除非它们被明确地标记为私有（private）。派生类可以通过关键字`base`来调用基类的构造函数和方法。

例如：

```csharp
class BaseClass
{
    public void SomeMethod()
    {
        // Method implementation
    }
}

class DerivedClass : BaseClass
{
    public void AnotherMethod()
    {
        // Accessing base class method
        base.SomeMethod();
       
        // Method implementation
    }
}
```

假设，有一个基类`Shape`，它的派生类是`Rectangle`：

```csharp
using System;
namespace InheritanceApplication
{
   class Shape
   {
      public void setWidth(int w)
      {
         width = w;
      }
      public void setHeight(int h)
      {
         height = h;
      }
      protected int width;
      protected int height;
   }

   // 派生类
   class Rectangle: Shape
   {
      public int getArea()
      {
         return (width * height);
      }
   }
   
   class RectangleTester
   {
      static void Main(string[] args)
      {
         Rectangle Rect = new Rectangle();

         Rect.setWidth(5);
         Rect.setHeight(7);

         // 打印对象的面积
         Console.WriteLine("总面积： {0}",  Rect.getArea());
         Console.ReadKey();
      }
   }
}
```

当上面的代码被编译和执行时，结果为：

```
总面积： 35
```

**三、基类的初始化**

派生类继承了基类的成员变量和成员方法。因此父类对象应在子类对象创建之前被创建。可以在成员初始化列表中进行父类的初始化。

例如：

```csharp
using System;
namespace RectangleApplication
{
   class Rectangle
   {
      // 成员变量
      protected double length;
      protected double width;
      public Rectangle(double l, double w)
      {
         length = l;
         width = w;
      }
      public double GetArea()
      {
         return length * width;
      }
      public void Display()
      {
         Console.WriteLine("长度： {0}", length);
         Console.WriteLine("宽度： {0}", width);
         Console.WriteLine("面积： {0}", GetArea());
      }
   }//end class Rectangle  
   class Tabletop : Rectangle
   {
      private double cost;
      public Tabletop(double l, double w) : base(l, w)
      { }
      public double GetCost()
      {
         double cost;
         cost = GetArea() * 70;
         return cost;
      }
      public void Display()
      {
         base.Display();
         Console.WriteLine("成本： {0}", GetCost());
      }
   }
   class ExecuteRectangle
   {
      static void Main(string[] args)
      {
         Tabletop t = new Tabletop(4.5, 7.5);
         t.Display();
         Console.ReadLine();
      }
   }
}
```

当上面的代码被编译和执行时，结果为：

```
长度： 4.5
宽度： 7.5
面积： 33.75
成本： 2362.5
```

**四、继承接口（Interface Inheritance）**

一个接口可以继承自一个或多个其他接口，派生接口继承了基接口的所有成员。

派生接口可以扩展基接口的成员列表，但不能改变它们的访问修饰符。

例如：

```csharp
interface IBaseInterface
{
    void Method1();
}

interface IDerivedInterface : IBaseInterface
{
    void Method2();
}
```

继承接口的实例可以通过以下方式来实现：

```csharp
using System;

// 定义一个基接口
interface IBaseInterface
{
    void Method1();
}

// 定义一个派生接口，继承自基接口
interface IDerivedInterface : IBaseInterface
{
    void Method2();
}

// 实现派生接口的类
class MyClass : IDerivedInterface
{
    public void Method1()
    {
        Console.WriteLine("Method1 implementation");
    }

    public void Method2()
    {
        Console.WriteLine("Method2 implementation");
    }
}

class Program
{
    static void Main(string[] args)
    {
        // 创建 MyClass 类的实例
        MyClass obj = new MyClass();

        // 调用继承自基接口的方法
        obj.Method1();

        // 调用派生接口新增的方法
        obj.Method2();
    }
}
```

输出结果为：

```
Method1 implementation
Method2 implementation
```

**五、C# 多重继承**

多重继承指的是一个类别可以同时从多于一个父类继承行为与特征的功能。C# 不支持多重继承。但是，可以使用接口来实现多重继承。

例如：

```csharp
using System;
namespace InheritanceApplication
{
   class Shape
   {
      public void setWidth(int w)
      {
         width = w;
      }
      public void setHeight(int h)
      {
         height = h;
      }
      protected int width;
      protected int height;
   }

   // 基类 PaintCost
   public interface PaintCost
   {
      int getCost(int area);

   }
   // 派生类
   class Rectangle : Shape, PaintCost
   {
      public int getArea()
      {
         return (width * height);
      }
      public int getCost(int area)
      {
         return area * 70;
      }
   }
   class RectangleTester
   {
      static void Main(string[] args)
      {
         Rectangle Rect = new Rectangle();
         int area;
         Rect.setWidth(5);
         Rect.setHeight(7);
         area = Rect.getArea();
         // 打印对象的面积
         Console.WriteLine("总面积： {0}",  Rect.getArea());
         Console.WriteLine("油漆总成本： ${0}", Rect.getCost(area));
         Console.ReadKey();
      }
   }
}
```

当上面的代码被编译和执行时，结果为：

```
总面积： 35
油漆总成本： $2450
```