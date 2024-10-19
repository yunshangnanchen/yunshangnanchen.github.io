# C# 特性（Attribute）

**一、特性概述**

特性（Attribute）是用于在运行时传递程序中各种元素（比如类、方法、结构、枚举、组件等）的行为信息的声明性标签。可以通过使用特性向程序添加声明性信息。一个声明性标签是通过放置在它所应用的元素前面的方括号（[ ]）来描述的。

特性用于添加元数据，如编译器指令和注释、描述、方法、类等其他信息。.Net 框架提供了两种类型的特性：预定义特性和自定义特性。

**二、规定特性语法**

规定特性（Attribute）的语法如下：

`[attribute(positional_parameters, name_parameter = value,...)]element`

特性的名称和值是在方括号内规定的，放置在它所应用的元素之前。`positional_parameters`规定必需的信息，`name_parameter`规定可选的信息。

**三、预定义特性**

.Net 框架提供了三种预定义特性：

1. **AttributeUsage**
    - 描述了如何使用一个自定义特性类。规定了特性可应用到的项目的类型。
    - 语法：`[AttributeUsage(validon, AllowMultiple=allowmultiple, Inherited=inherited)]`
    - 参数：
        - `validon`：规定特性可被放置的语言元素。是枚举器`AttributeTargets`的值的组合。默认值是`AttributeTargets.All`。
        - `allowmultiple`（可选）：为该特性的`AllowMultiple`属性提供一个布尔值。如果为`true`，则该特性是多用的。默认值是`false`（单用的）。
        - `inherited`（可选）：为该特性的`Inherited`属性提供一个布尔值。如果为`true`，则该特性可被派生类继承。默认值是`false`（不被继承）。
    - 例如：`[AttributeUsage(AttributeTargets.Class | AttributeTargets.Constructor | AttributeTargets.Field | AttributeTargets.Method | AttributeTargets.Property, AllowMultiple = true)]`
2. **Conditional**
    - 这个预定义特性标记了一个条件方法，其执行依赖于指定的预处理标识符。会引起方法调用的条件编译，取决于指定的值，比如`Debug`或`Trace`。例如，当调试代码时显示变量的值。
    - 语法：`[Conditional(conditionalSymbol)]`
    - 例如：`[Conditional("DEBUG")]`
3. **Obsolete**
    - 这个预定义特性标记了不应被使用的程序实体。可以让您通知编译器丢弃某个特定的目标元素。
    - 语法：`[Obsolete(message)]`或`[Obsolete(message, iserror)]`
    - 参数：
        - `message`：是一个字符串，描述项目为什么过时以及该替代使用什么。
        - `iserror`：是一个布尔值。如果该值为`true`，编译器应把该项目的使用当作一个错误。默认值是`false`（编译器生成一个警告）。

**四、创建自定义特性步骤**

创建并使用自定义特性包含四个步骤：

1. **声明自定义特性**：一个新的自定义特性应派生自`System.Attribute`类。
    - 例如：`[AttributeUsage(AttributeTargets.Class | AttributeTargets.Constructor | AttributeTargets.Field | AttributeTargets.Method | AttributeTargets.Property,AllowMultiple = true)]public class DeBugInfo : System.Attribute`
2. **构建自定义特性**：以`DeBugInfo`为例，存储调试程序获得的信息，包括 bug 的代码编号、辨认该 bug 的开发人员名字、最后一次审查该代码的日期、一个存储了开发人员标记的字符串消息。
    - 代码示例：
```csharp
// 一个自定义特性 BugFix 被赋给类及其成员
[AttributeUsage(AttributeTargets.Class |
AttributeTargets.Constructor |
AttributeTargets.Field |
AttributeTargets.Method |
AttributeTargets.Property,
AllowMultiple = true)]

public class DeBugInfo : System.Attribute
{
  private int bugNo;
  private string developer;
  private string lastReview;
  public string message;

  public DeBugInfo(int bg, string dev, string d)
  {
      this.bugNo = bg;
      this.developer = dev;
      this.lastReview = d;
  }

  public int BugNo
  {
      get
      {
          return bugNo;
      }
  }
  public string Developer
  {
      get
      {
          return developer;
      }
  }
  public string LastReview
  {
      get
      {
          return lastReview;
      }
  }
  public string Message
  {
      get
      {
          return message;
      }
      set
      {
          message = value;
      }
  }
}
```
3. **应用自定义特性**：通过把特性放置在紧接着它的目标之前，来应用该特性。
    - 例如：
```csharp
[DeBugInfo(45, "Zara Ali", "12/8/2012", Message = "Return type mismatch")]
[DeBugInfo(49, "Nuha Ali", "10/10/2012", Message = "Unused variable")]
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
  [DeBugInfo(55, "Zara Ali", "19/10/2012",
  Message = "Return type mismatch")]
  public double GetArea()
  {
      return length * width;
  }
  [DeBugInfo(56, "Zara Ali", "19/10/2012")]
  public void Display()
  {
      Console.WriteLine("Length: {0}", length);
      Console.WriteLine("Width: {0}", width);
      Console.WriteLine("Area: {0}", GetArea());
  }
}
```
4. **通过反射访问特性**：编写一个简单的程序来读取元数据以便查找各种符号。元数据是用于描述其他数据的数据和信息。该程序应使用反射来在运行时访问特性。（将在下一章详细讨论）。