# C# 数组（Array）

**一、概述**

数组是一个存储相同类型元素的固定大小的顺序集合。在 C# 中，数组是用来存储数据的集合，通常被认为是一个同一类型变量的集合。数组中某个指定的元素是通过索引来访问的，所有的数组都是由连续的内存位置组成，最低的地址对应第一个元素，最高的地址对应最后一个元素。

**二、声明数组**

在 C# 中声明一个数组，可以使用下面的语法：

```csharp
datatype[] arrayName;
```

其中：
- `datatype`用于指定被存储在数组中的元素的类型。
- `[]`指定数组的秩（维度）。秩指定数组的大小。
- `arrayName`指定数组的名称。

例如：

```csharp
double[] balance;
```

**三、初始化数组**

声明一个数组不会在内存中初始化数组。当初始化数组变量时，可以赋值给数组。数组是一个引用类型，所以需要使用`new`关键字来创建数组的实例。

例如：

```csharp
double[] balance = new double[10];
```

也可以在声明数组的同时给数组赋值：

```csharp
double[] balance = { 2340.0, 4523.69, 3421.0};
```

还可以创建并初始化一个数组：

```csharp
int [] marks = new int[5]  { 99,  98, 92, 97, 95};
```

在上述情况下，也可以省略数组的大小：

```csharp
int [] marks = new int[]  { 99,  98, 92, 97, 95};
```

可以赋值一个数组变量到另一个目标数组变量中，此时目标和源会指向相同的内存位置：

```csharp
int [] marks = new int[]  { 99,  98, 92, 97, 95};
int[] score = marks;
```

当创建一个数组时，C# 编译器会根据数组类型隐式初始化每个数组元素为一个默认值。例如，`int`数组的所有元素都会被初始化为 0。

**四、访问数组元素**

元素是通过带索引的数组名称来访问的，把元素的索引放置在数组名称后的方括号中来实现。例如：

```csharp
double salary = balance[9];
```

以下是一个实例，使用声明、赋值、访问数组的概念：

```csharp
using System;
namespace ArrayApplication
{
   class MyArray
   {
      static void Main(string[] args)
      {
         int []  n = new int[10]; /* n 是一个带有 10 个整数的数组 */
         int i,j;


         /* 初始化数组 n 中的元素 */        
         for ( i = 0; i < 10; i++ )
         {
            n[ i ] = i + 100;
         }

         /* 输出每个数组元素的值 */
         for (j = 0; j < 10; j++ )
         {
            Console.WriteLine("Element[{0}] = {1}", j, n[j]);
         }
         Console.ReadKey();
      }
   }
}
```

当上面的代码被编译和执行时，结果为：

```
Element[0] = 100
Element[1] = 101
Element[2] = 102
Element[3] = 103
Element[4] = 104
Element[5] = 105
Element[6] = 106
Element[7] = 107
Element[8] = 108
Element[9] = 109
```

**五、使用 foreach 循环**

在前面的实例中，使用`for`循环来访问每个数组元素，也可以使用`foreach`语句来遍历数组。

以下实例使用`foreach`来遍历一个数组：

```csharp
using System;

namespace ArrayApplication
{
   class MyArray
   {
      static void Main(string[] args)
      {
         int []  n = new int[10]; /* n 是一个带有 10 个整数的数组 */


         /* 初始化数组 n 中的元素 */        
         for ( int i = 0; i < 10; i++ )
         {
            n[i] = i + 100;
         }

         /* 输出每个数组元素的值 */
         foreach (int j in n )
         {
            int i = j-100;
            Console.WriteLine("Element[{0}] = {1}", i, j);
         }
         Console.ReadKey();
      }
   }
}
```

当上面的代码被编译和执行时，结果为：

```
Element[0] = 100
Element[1] = 101
Element[2] = 102
Element[3] = 103
Element[4] = 104
Element[5] = 105
Element[6] = 106
Element[7] = 107
Element[8] = 108
Element[9] = 109
```

**六、C# 数组细节**

在 C# 中，数组有以下一些重要概念：

1. **多维数组**：C# 支持多维数组，多维数组最简单的形式是二维数组。
2. **交错数组**：C# 支持交错数组，即数组的数组。
3. **传递数组给函数**：可以通过指定不带索引的数组名称来给函数传递一个指向数组的指针。
4. **参数数组**：通常用于传递未知数量的参数给函数。
5. **Array 类**：在`System`命名空间中定义，是所有数组的基类，并提供了各种用于数组的属性和方法。