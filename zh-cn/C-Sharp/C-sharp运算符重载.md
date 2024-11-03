# C# 运算符重载

**一、概述**

在 C#中，开发者可以重定义或重载内置的运算符，从而使得程序员能够为用户自定义类型使用运算符。重载运算符实际上是具有特殊名称的函数，通过关键字“operator”后跟运算符的符号来进行定义。与普通函数类似，重载运算符也拥有返回类型和参数列表。

**二、运算符重载的实现**

以下程序完整地展示了运算符重载的实现过程：

```csharp
using System;

namespace OperatorOvlApplication
{
    class Box
    {
        private double length;      // 长度
        private double breadth;     // 宽度
        private double height;      // 高度

        public double getVolume()
        {
            return length * breadth * height;
        }

        public void setLength(double len)
        {
            length = len;
        }

        public void setBreadth(double bre)
        {
            breadth = bre;
        }

        public void setHeight(double hei)
        {
            height = hei;
        }

        // 重载 + 运算符来把两个 Box 对象相加
        public static Box operator+(Box b, Box c)
        {
            Box box = new Box();
            box.length = b.length + c.length;
            box.breadth = b.breadth + c.breadth;
            box.height = b.height + c.height;
            return box;
        }
    }

    class Tester
    {
        static void Main(string[] args)
        {
            Box Box1 = new Box();         // 声明 Box1，类型为 Box
            Box Box2 = new Box();         // 声明 Box2，类型为 Box
            Box Box3 = new Box();         // 声明 Box3，类型为 Box
            double volume = 0.0;          // 体积

            // Box1 详述
            Box1.setLength(6.0);
            Box1.setBreadth(7.0);
            Box1.setHeight(5.0);

            // Box2 详述
            Box2.setLength(12.0);
            Box2.setBreadth(13.0);
            Box2.setHeight(10.0);

            // 使用重载的 ToString() 显示两个盒子
            Console.WriteLine("Box1： {0}", Box1.ToString());
            Console.WriteLine("Box2： {0}", Box2.ToString());

            // Box1 的体积
            volume = Box1.getVolume();
            Console.WriteLine("Box1 的体积： {0}", volume);

            // Box2 的体积
            volume = Box2.getVolume();
            Console.WriteLine("Box2 的体积： {0}", volume);

            // 把两个对象相加
            Box3 = Box1 + Box2;
            Console.WriteLine("Box3： {0}", Box3.ToString());

            // Box3 的体积
            volume = Box3.getVolume();
            Console.WriteLine("Box3 的体积： {0}", volume);

            // 比较盒子
            if (Box1 > Box2)
                Console.WriteLine("Box1 大于 Box2");
            else
                Console.WriteLine("Box1 不大于 Box2");

            if (Box1 < Box2)
                Console.WriteLine("Box1 小于 Box2");
            else
                Console.WriteLine("Box1 不小于 Box2");

            if (Box1 >= Box2)
                Console.WriteLine("Box1 大于等于 Box2");
            else
                Console.WriteLine("Box1 不大于等于 Box2");

            if (Box1 <= Box2)
                Console.WriteLine("Box1 小于等于 Box2");
            else
                Console.WriteLine("Box1 不小于等于 Box2");

            if (Box1!= Box2)
                Console.WriteLine("Box1 不等于 Box2");
            else
                Console.WriteLine("Box1 等于 Box2");

            Box4 = Box3;
            if (Box3 == Box4)
                Console.WriteLine("Box3 等于 Box4");
            else
                Console.WriteLine("Box3 不等于 Box4");

            Console.ReadKey();
        }
    }
}
```

当上述代码被编译并执行时，会产生如下结果：

```
Box1： (6, 7, 5)
Box2： (12, 13, 10)
Box1 的体积： 210
Box2 的体积： 1560
Box3： (18, 20, 15)
Box3 的体积： 5400
Box1 不大于 Box2
Box1 小于 Box2
Box1 不大于等于 Box2
Box1 小于等于 Box2
Box1 不等于 Box2
Box3 等于 Box4
```

**三、可重载和不可重载运算符**

下表详细描述了 C#中运算符重载的能力：

|运算符|描述|
|----|----|
|+, -,!, ~, ++, --|这些一元运算符仅有一个操作数，并且可以被重载。|
|+, -, *, /, %|这些二元运算符带有两个操作数，同样可以被重载。|
|==,!=, <, >, <=, >=|这些比较运算符能够被重载。|
|&&, |||这些条件逻辑运算符不能直接被重载。|
|+=, -=, *=, /=, %=|这些赋值运算符不能被重载。|
|=,.,?:, ->, new, is, sizeof, typeof|这些运算符无法被重载。|

例如，扩展上面的实例，重载更多的运算符：

```csharp
using System;

namespace OperatorOvlApplication
{
    class Box
    {
        private double length;      // 长度
        private double breadth;     // 宽度
        private double height;      // 高度

        public double getVolume()
        {
            return length * breadth * height;
        }

        public void setLength(double len)
        {
            length = len;
        }

        public void setBreadth(double bre)
        {
            breadth = bre;
        }

        public void setHeight(double hei)
        {
            height = hei;
        }

        // 重载 + 运算符来把两个 Box 对象相加
        public static Box operator+(Box b, Box c)
        {
            Box box = new Box();
            box.length = b.length + c.length;
            box.breadth = b.breadth + c.breadth;
            box.height = b.height + c.height;
            return box;
        }

        public static bool operator==(Box lhs, Box rhs)
        {
            bool status = false;
            if (lhs.length == rhs.length && lhs.height == rhs.height && lhs.breadth == rhs.breadth)
            {
                status = true;
            }
            return status;
        }

        public static bool operator!=(Box lhs, Box rhs)
        {
            bool status = false;
            if (lhs.length!= rhs.length || lhs.height!= rhs.height || lhs.breadth!= rhs.breadth)
            {
                status = true;
            }
            return status;
        }

        public static bool operator<(Box lhs, Box rhs)
        {
            bool status = false;
            if (lhs.length < rhs.length && lhs.height < rhs.height && lhs.breadth < rhs.breadth)
            {
                status = true;
            }
            return status;
        }

        public static bool operator>(Box lhs, Box rhs)
        {
            bool status = false;
            if (lhs.length > rhs.length && lhs.height > rhs.height && lhs.breadth > rhs.breadth)
            {
                status = true;
            }
            return status;
        }

        public static bool operator<=(Box lhs, Box rhs)
        {
            bool status = false;
            if (lhs.length <= rhs.length && lhs.height <= rhs.height && lhs.breadth <= rhs.breadth)
            {
                status = true;
            }
            return status;
        }

        public static bool operator>=(Box lhs, Box rhs)
        {
            bool status = false;
            if (lhs.length >= rhs.length && lhs.height >= rhs.height && lhs.breadth >= rhs.breadth)
            {
                status = true;
            }
            return status;
        }

        public override string ToString()
        {
            return String.Format("({0}, {1}, {2})", length, breadth, height);
        }
    }

    class Tester
    {
        static void Main(string[] args)
        {
            Box Box1 = new Box();          // 声明 Box1，类型为 Box
            Box Box2 = new Box();          // 声明 Box2，类型为 Box
            Box Box3 = new Box();          // 声明 Box3，类型为 Box
            Box Box4 = new Box();
            double volume = 0.0;   // 体积

            // Box1 详述
            Box1.setLength(6.0);
            Box1.setBreadth(7.0);
            Box1.setHeight(5.0);

            // Box2 详述
            Box2.setLength(12.0);
            Box2.setBreadth(13.0);
            Box2.setHeight(10.0);

            // 使用重载的 ToString() 显示两个盒子
            Console.WriteLine("Box1： {0}", Box1.ToString());
            Console.WriteLine("Box2： {0}", Box2.ToString());

            // Box1 的体积
            volume = Box1.getVolume();
            Console.WriteLine("Box1 的体积： {0}", volume);

            // Box2 的体积
            volume = Box2.getVolume();
            Console.WriteLine("Box2 的体积： {0}", volume);

            // 把两个对象相加
            Box3 = Box1 + Box2;
            Console.WriteLine("Box3： {0}", Box3.ToString());

            // Box3 的体积
            volume = Box3.getVolume();
            Console.WriteLine("Box3 的体积： {0}", volume);

            // 比较盒子
            if (Box1 > Box2)
                Console.WriteLine("Box1 大于 Box2");
            else
                Console.WriteLine("Box1 不大于 Box2");

            if (Box1 < Box2)
                Console.WriteLine("Box1 小于 Box2");
            else
                Console.WriteLine("Box1 不小于 Box2");

            if (Box1 >= Box2)
                Console.WriteLine("Box1 大于等于 Box2");
            else
                Console.WriteLine("Box1 不大于等于 Box2");

            if (Box1 <= Box2)
                Console.WriteLine("Box1 小于等于 Box2");
            else
                Console.WriteLine("Box1 不小于等于 Box2");

            if (Box1!= Box2)
                Console.WriteLine("Box1 不等于 Box2");
            else
                Console.WriteLine("Box1 等于 Box2");

            Box4 = Box3;
            if (Box3 == Box4)
                Console.WriteLine("Box3 等于 Box4");
            else
                Console.WriteLine("Box3 不等于 Box4");

            Console.ReadKey();
        }
    }
}
```

当上面的代码被编译并执行时，结果为：

```
Box1： (6, 7, 5)
Box2： (12, 13, 10)
Box1 的体积： 210
Box2 的体积： 1560
Box3： (18, 20, 15)
Box3 的体积： 5400
Box1 不大于 Box2
Box1 小于 Box2
Box1 不大于等于 Box2
Box1 小于等于 Box2
Box1 不等于 Box2
Box3 等于 Box4
```