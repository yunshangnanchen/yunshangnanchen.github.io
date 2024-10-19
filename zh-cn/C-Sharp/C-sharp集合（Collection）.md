## C# 集合（Collection）

**一、概述**

集合（Collection）类是专门用于数据存储和检索的类。这些类提供了对栈（stack）、队列（queue）、列表（list）和哈希表（hash table）的支持。大多数集合类实现了相同的接口。

集合类服务于不同的目的，如为元素动态分配内存，基于索引访问列表项等等。这些类创建`Object`类的对象的集合。在 C# 中，`Object`类是所有数据类型的基类。

**二、各种集合类和它们的用法**

1. **动态数组（ArrayList）**：
   - 它代表了可被单独索引的对象的有序集合。基本上可以替代一个数组，但与数组不同的是，您可以使用索引在指定的位置添加和移除项目，动态数组会自动重新调整它的大小。
   - 它也允许在列表中进行动态内存分配、增加、搜索、排序各项。
   - 例如：
   ```csharp
   ArrayList myList = new ArrayList();
   myList.Add(10);
   myList.Add("Hello");
   myList.Add(true);
   foreach (object item in myList)
   {
       Console.WriteLine(item);
   }
   ```

2. **哈希表（Hashtable）**：
   - 使用键来访问集合中的元素。当使用键访问元素时，则使用哈希表，而且您可以识别一个有用的键值。哈希表中的每一项都有一个键/值对。键用于访问集合中的项目。
   - 例如：
   ```csharp
   Hashtable myHashTable = new Hashtable();
   myHashTable.Add("key1", "value1");
   myHashTable.Add("key2", 123);
   Console.WriteLine(myHashTable["key1"]);
   Console.WriteLine(myHashTable["key2"]);
   ```

3. **排序列表（SortedList）**：
   - 可以使用键和索引来访问列表中的项。排序列表是数组和哈希表的组合。它包含一个可使用键或索引访问各项的列表。如果使用索引访问各项，则它是一个动态数组（ArrayList），如果使用键访问各项，则它是一个哈希表（Hashtable）。集合中的各项总是按键值排序。
   - 例如：
   ```csharp
   SortedList mySortedList = new SortedList();
   mySortedList.Add("apple", "A fruit");
   mySortedList.Add("banana", "Another fruit");
   Console.WriteLine(mySortedList["apple"]);
   Console.WriteLine(mySortedList["banana"]);
   ```

4. **堆栈（Stack）**：
   - 代表了一个后进先出的对象集合。当需要对各项进行后进先出的访问时，则使用堆栈。当在列表中添加一项，称为推入元素，当从列表中移除一项时，称为弹出元素。
   - 例如：
   ```csharp
   Stack myStack = new Stack();
   myStack.Push(1);
   myStack.Push(2);
   myStack.Push(3);
   Console.WriteLine(myStack.Pop());
   Console.WriteLine(myStack.Pop());
   Console.WriteLine(myStack.Pop());
   ```

5. **队列（Queue）**：
   - 代表了一个先进先出的对象集合。当需要对各项进行先进先出的访问时，则使用队列。当在列表中添加一项，称为入队，当从列表中移除一项时，称为出队。
   - 例如：
   ```csharp
   Queue myQueue = new Queue();
   myQueue.Enqueue(1);
   myQueue.Enqueue(2);
   myQueue.Enqueue(3);
   Console.WriteLine(myQueue.Dequeue());
   Console.WriteLine(myQueue.Dequeue());
   Console.WriteLine(myQueue.Dequeue());
   ```

6. **点阵列（BitArray）**：
   - 代表了一个使用值 1 和 0 来表示的二进制数组。当需要存储位，但是事先不知道位数时，则使用点阵列。可以使用整型索引从点阵列集合中访问各项，索引从零开始。
   - 例如：
   ```csharp
   BitArray myBitArray = new BitArray(8);
   myBitArray[0] = true;
   myBitArray[1] = false;
   for (int i = 0; i < myBitArray.Length; i++)
   {
       Console.Write(myBitArray[i]? "1" : "0");
   }
   Console.WriteLine();
   ```

## C# 中的 List

**一、概述**

`List`是 C# 中一种常用的集合类型，它提供了一系列强大的功能来管理和操作一组强类型的元素。

**二、构建和特点**

1. 构建方式：
   - `var list = new List<int>();`，这里使用了 C# 的泛型特性，确保了类型安全，避免了像`ArrayList`那样可能出现的装箱和拆箱操作带来的性能损耗。
2. 索引特性：
   - `List`通过索引分配元素，索引与数组一样，从 0 开始。可以通过索引来读取值，例如：
   ```csharp
   var a = new List<int>();
   a.Add(12);
   a.Add(10);
   Console.WriteLine(a[0]);
   ```
3. 可包含相同项且手动排序：
   - `List`可以有相同的项，并且项的顺序可以手动调整。但需要注意的是，在改变项后，项的索引可能会发生改变。例如：
   ```csharp
   var a = new List<int>();
   a.Add(12);
   a.Add(10);
   Console.WriteLine(a[0]);
   a.Remove(12);
   Console.WriteLine(a[0]);
   ```

**三、常用方法**

1. `Add()`：将东西加入到列表的最后。
   - 示例：`a.Add(2);`
2. `Remove()`：删掉项中第一个匹配你想删除的条件的项（删去第一个匹配此条件的项）。
   - 示例：`a.Remove(2);`
3. `Clear()`：清空所有项。
4. `Sort()`：用系统默认的方式对项进行排序。
   - 示例：`a.Sort();`
5. `Contains()`：查看某项是否存在于列表中，返回一个布尔值。
   - 示例：`bool a3 = a.Contains(2);`

以下是一个完整的示例代码：

```csharp
using System;
using static System.Console;
using System.Collections.Generic;

namespace HelloWorldApplication
{
    class HelloWorld
    {
        static void Main(string[] args)
        {
            var a = new List<int>();
            a.Add(2);
            a.Add(6);
            a.Add(2);
            a.Add(10);
            Console.WriteLine($"第一个数为{a[0]}");
            a.Remove(2); // 删去第一个匹配此条件的项
            a.Sort();
            foreach (var a2 in a)
            {
                WriteLine(a2);
            }
            bool a3 = a.Contains(2);
            WriteLine(a3);
            Console.ReadKey();
        }
    }
}
```