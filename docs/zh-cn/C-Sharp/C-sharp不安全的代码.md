# C# 不安全代码

**一、不安全代码概述**

当一个代码块使用`unsafe`修饰符标记时，C#允许在函数中使用指针变量。不安全代码或非托管代码是指使用了指针变量的代码块。

**二、指针变量**

指针是值为另一个变量的地址的变量，即内存位置的直接地址。就像其他变量或常量，必须在使用指针存储其他变量地址之前声明指针。

指针变量声明的一般形式为：`type* var-name;`

例如：
- `int* p`：`p`是指向整数的指针。
- `double* p`：`p`是指向双精度数的指针。
- `float* p`：`p`是指向浮点数的指针。
- `int** p`：`p`是指向整数的指针的指针。
- `int*[] p`：`p`是指向整数的指针的一维数组。
- `char* p`：`p`是指向字符的指针。
- `void* p`：`p`是指向未知类型的指针。

在同一个声明中声明多个指针时，星号`*`仅与基础类型一起写入；而不是用作每个指针名称的前缀。例如：`int* p1, p2, p3; // 正确`，`int *p1, *p2, *p3; // 错误`。

以下实例说明了 C#中使用了`unsafe`修饰符时指针的使用：

```csharp
using System;
namespace UnsafeCodeApplication
{
    class Program
    {
        static unsafe void Main(string[] args)
        {
            int var = 20;
            int* p = &var;
            Console.WriteLine("Data is: {0} ",  var);
            Console.WriteLine("Address is: {0}",  (int)p);
            Console.ReadKey();
        }
    }
}
```

当上面的代码被编译和执行时，会产生以下结果：

`Data is: 20`

`Address is: 99215364`

**三、使用指针检索数据值**

可以使用`ToString()`方法检索存储在指针变量所引用位置的数据。

例如：

```csharp
using System;
namespace UnsafeCodeApplication
{
   class Program
   {
      public static void Main()
      {
         unsafe
         {
            int var = 20;
            int* p = &var;
            Console.WriteLine("Data is: {0} ", var);
            Console.WriteLine("Data is: {0} ", p->ToString());
            Console.WriteLine("Address is: {0} ", (int)p);
         }
         Console.ReadKey();
      }
   }
}
```

当上面的代码被编译和执行时，会产生以下结果：

`Data is: 20`

`Data is: 20`

`Address is: 77128984`

**四、传递指针作为方法的参数**

可以向方法传递指针变量作为方法的参数。

例如：

```csharp
using System;
namespace UnsafeCodeApplication
{
   class TestPointer
   {
      public unsafe void swap(int* p, int *q)
      {
         int temp = *p;
         *p = *q;
         *q = temp;
      }

      public unsafe static void Main()
      {
         TestPointer p = new TestPointer();
         int var1 = 10;
         int var2 = 20;
         int* x = &var1;
         int* y = &var2;
         
         Console.WriteLine("Before Swap: var1:{0}, var2: {1}", var1, var2);
         p.swap(x, y);

         Console.WriteLine("After Swap: var1:{0}, var2: {1}", var1, var2);
         Console.ReadKey();
      }
   }
}
```

当上面的代码被编译和执行时，会产生以下结果：

`Before Swap: var1:10, var2: 20`

`After Swap: var1:20, var2: 10`

**五、使用指针访问数组元素**

在 C#中，数组名称和一个指向与数组数据具有相同数据类型的指针是不同的变量类型。可以使用`fixed`关键字来固定指针，以便使用指针变量访问数组数据。

例如：

```csharp
using System;
namespace UnsafeCodeApplication
{
   class TestPointer
   {
      public unsafe static void Main()
      {
         int[]  list = {10, 100, 200};
         fixed(int *ptr = list)

         /* 显示指针中数组地址 */
         for ( int i = 0; i < 3; i++)
         {
            Console.WriteLine("Address of list[{0}]={1}",i,(int)(ptr + i));
            Console.WriteLine("Value of list[{0}]={1}", i, *(ptr + i));
         }
         Console.ReadKey();
      }
   }
}
```

当上面的代码被编译和执行时，会产生以下结果：

`Address of list[0]=31627168`

`Value of list[0]=10`

`Address of list[1]=31627172`

`Value of list[1]=100`

`Address of list[2]=31627176`

`Value of list[2]=200`

**六、编译不安全代码**

为了编译不安全代码，必须切换到命令行编译器指定`/unsafe`命令行。如果使用的是 Visual Studio IDE，那么需要在项目属性中启用不安全代码。

步骤如下：
1. 通过双击资源管理器（Solution Explorer）中的属性（properties）节点，打开项目属性（project properties）。
2. 点击 Build 标签页。
3. 选择选项"Allow unsafe code"。

总之，C#中的不安全代码提供了一种在特定情况下使用指针的方式，但由于其潜在的风险，应谨慎使用。