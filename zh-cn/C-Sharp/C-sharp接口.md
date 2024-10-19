# C# 接口（Interface）

**一、概述**

接口定义了所有类继承接口时应遵循的语法合同。接口定义了语法合同“是什么”部分，派生类定义了语法合同“怎么做”部分。接口定义了属性、方法和事件等成员，只包含成员的声明，成员的定义是派生类的责任。接口使得实现接口的类或结构在形式上保持一致。

抽象类在某种程度上与接口类似，但通常在只有少数方法由基类声明由派生类实现时使用。接口本身并不实现任何功能，只是和声明实现该接口的对象订立一个必须实现哪些行为的契约。抽象类不能直接实例化，但允许派生出具体的、具有实际功能的类。

**二、定义接口**

接口使用`interface`关键字声明，与类的声明类似。接口声明默认是`public`的。

例如：

```csharp
interface IMyInterface
{
    void MethodToImplement();
}
```

以上代码定义了接口`IMyInterface`，通常接口命名以“I”字母开头。这个接口只有一个方法`MethodToImplement()`，没有参数和返回值，当然可以按照需求设置参数和返回值。值得注意的是，该方法并没有具体的实现。

**三、实现接口**

以下是实现上述接口的示例：

```csharp
using System;

interface IMyInterface
{
    // 接口成员
    void MethodToImplement();
}

class InterfaceImplementer : IMyInterface
{
    static void Main()
    {
        InterfaceImplementer iImp = new InterfaceImplementer();
        iImp.MethodToImplement();
    }

    public void MethodToImplement()
    {
        Console.WriteLine("MethodToImplement() called.");
    }
}
```

`InterfaceImplementer`类实现了`IMyInterface`接口，接口的实现与类的继承语法格式类似：

```csharp
class InterfaceImplementer : IMyInterface
```

继承接口后，需要实现接口的方法`MethodToImplement()`，方法名必须与接口定义的方法名一致。

**四、接口继承**

以下实例定义了两个接口`IParentInterface`和`IMyInterface`。如果一个接口继承其他接口，那么实现类或结构就需要实现所有接口的成员。

例如：

```csharp
using System;

interface IParentInterface
{
    void ParentInterfaceMethod();
}

interface IMyInterface : IParentInterface
{
    void MethodToImplement();
}

class InterfaceImplementer : IMyInterface
{
    static void Main()
    {
        InterfaceImplementer iImp = new InterfaceImplementer();
        iImp.MethodToImplement();
        iImp.ParentInterfaceMethod();
    }

    public void MethodToImplement()
    {
        Console.WriteLine("MethodToImplement() called.");
    }

    public void ParentInterfaceMethod()
    {
        Console.WriteLine("ParentInterfaceMethod() called.");
    }
}
```

在这个例子中，`IMyInterface`继承了`IParentInterface`接口，因此接口实现类必须实现`MethodToImplement()`和`ParentInterfaceMethod()`方法。实例输出结果为：

```
MethodToImplement() called.
ParentInterfaceMethod() called.
```