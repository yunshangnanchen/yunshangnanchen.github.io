# Markdown

在代码前后加上两个$

## 目录

- [Markdown](#markdown)
  - [目录](#目录)
  - [常规](#常规)
    - [希腊和希伯来字母](#希腊和希伯来字母)
    - [箭头](#箭头)
    - [三角函数](#三角函数)
    - [集合](#集合)
    - [上下标符号](#上下标符号)
    - [公式](#公式)
    - [其他环境](#其他环境)
    - [矩阵](#矩阵)
    - [括号](#括号)
    - [大括号](#大括号)
  - [汇总](#汇总)
    - [普通符号](#普通符号)
    - [对数运算](#对数运算)
    - [微积分运算](#微积分运算)
    - [逻辑运算](#逻辑运算)
    - [连线](#连线)
    - [上下标](#上下标)
    - [关于括号](#关于括号)
    - [分数](#分数)
    - [开方](#开方)
    - [省略号](#省略号)
    - [向量](#向量)
    - [积分](#积分)
    - [极限](#极限)
    - [累加/累乘](#累加累乘)
    - [希腊字母](#希腊字母)
    - [需要转义的字符](#需要转义的字符)

## 常规

### 希腊和希伯来字母

|符号| 代码    |符号|代码   |符号 |代码    |符号 |代码        |符号 |代码  |符号|代码       |
|----| ----   |----|----   |----|----    |----|----        |----|----   |----|----     |
|α   |\alpha  |κ   |\kappa |ψ   |\psi    |ϝ   |\digamma    |Δ   |\Delta |Θ   |\Theta   |
|β   |\beta   |λ   |\lambda|ρ   |\rhoρ   |ε   |\varepsilon |Γ   |\Gamma |Υ   |\UpsilonΥ|
|χ   |\chi    |μ   |\mu    |σ   |\sigma  |ϰ   |\varkappa   |Λ   |\Lambda|Ξ   |\Xi|
|δ   |\delta  |ν   |\nu    |τ   |\tau    |φ   |\varphi     |Ω   |\Omega |ℵ   |\aleph   |
|ϵ   |\epsilon|o   |o      |θ   |\theta  |ϖ   |\varpi      |Φ   |\Phi   |ℶ   |\beth    |
|η   |\eta    |ω   |\omega |υ   |\upsilon|ϱ   |\varrho     |Π   |\Pi    |ℸ   |\daleth  |
|γ   |\gamma  |ϕ   |\phi   |ξ   |\xi     |ς   |\varsigma   |Ψ   |\Psi   |ℷ   |\gimel   |
|ι   |\iotaι  |π   |\pi    |ζ   |\zeta   |ϑ   |\vartheta   |Σ   |\Sigma  |   |         |

|符号|代码|符号|代码|符号|代码|
|----|----|----|----|----|----|
|$\frac{abc}{xyz}$|\frac{abc}{xyz}|$\overline{abc}$|\overline{abc}|$\overrightarrow{abc}$|\overrightarrow{abc}|
|$f’$|f’|$\underline{abc}$|\underline{abc}|$\overleftarrow{abc}$|\overleftarrow{abc}|
|$\sqrt{abc}$|\sqrt{abc}|$\widehat{abc}$|\widehat{abc}|$\overbrace{abc}$|\overbrace{abc}|
|$\sqrt[n]{abc}$|\sqrt[n]{abc}|$\widetilde{abc}$|\widetilde{abc}|$\underbrace{abc}$|\underbrace{abc}|

### 箭头

|符号       |代码     |符号        |代码       |符号         |代码      |符号          |代码        |
|----      |----    |----        |----      |----        |----      |----         |----       |
|$\uparrow$|\uparrow|$\downarrow$|\downarrow|$\leftarrow$|\leftarrow|$\rightarrow$|\rightarrow|
|$\Uparrow$|\Uparrow|$\Downarrow$|\Downarrow|$\Leftarrow$|\Leftarrow|$\Rightarrow$|\Rightarrow|
|$\longleftarrow$|\longleftarrow|$\longrightarrow$|\longrightarrow|$\Longleftarrow$|\Longleftarrow|$\Longrightarrow$|\Longrightarrow|

### 三角函数

|算式|markdown|算式|markdown|
|:----:|:----:|:----:|:----:|
|$\sin$|\sin|$\cos$|\cos|
|$\tan$|\tan|$\cot$|\cot|
|$\sec$|\sec|$\bot$|\bot|
|$\angle$|\angle|$40^\circ40$|40^\circ40|

### 集合

|算式|markdown|描述|算式|markdown|描述|
|:----:|:----:|:----:|:----:|:----:|:----:|
|$\emptyset$  |\emptyset  |空集  |$\bigcap$    |\bigcap    |交集|
|$\in$        |\in        |属于  |$\uplus$     |\uplus     |多重集|
|$\ni$        |\ni        |      |$\biguplus$  |\biguplus  |多重集|
|$\notin$     |\notin     |不属于|$\sqsupset$  |\sqsupset  | |
|$\subset$    |\subset    |子集  |$\sqcap$     |\sqcap     | |
|$\supset$    |\supset    |      |$\sqsubseteq$|\sqsubseteq| |
|$\not\subset$|\not\subset|非子集|$\sqsupseteq$|\sqsupseteq| |
|$\subseteq$  |\subseteq  |真子集|$\vee$       |\vee       | |
|$\supseteq$  |\supseteq  |     |$\wedge$     |\wedge      | |
|$\cup$       |\cup       |并集  |$\setminus$  |\setminus  |集合中的减法|
|$\bigcup$    |\bigcup    |并集  |   |    |    |
|$\cap$       |\cap       |交集  |   |    |    |

### 上下标符号

|算式|markdown|算式|markdown|
|:----:|:----:|:----:|:----:|
|$\bar{a}$  |\bar{a}  |$\breve{a}$                |\breve{a}                |
|$\acute{a}$|\acute{a}|$\tilde{a}$                |\tilde{a}                |
|$\breve{a}$|\breve{a}|$\vec{a}$                  |\vec{a}                  |
|$\grave{a}$|\grave{a}|$\overline{a + b + c + d}$ |\overline{a + b + c + d} |
|$\dot{a}$  |\dot{a}  |$\underline{a + b + c + d}$|\underline{a + b + c + d}|
|$\ddot{a}$ |\ddot{a} |$\overbrace{a + b + c + d}$|\overbrace{a + b + c + d}|
|$\hat{a}$  |\hat{a}  |$\underline{a + b + c + d}$|\underline{a + b + c + d}|
|$\check{a}$|\check{a}|$\overbrace{a + \underbrace{b + c}_{1.0} + d}^{2.0}$|\overbrace{a + \underbrace{b + c}_{1.0} + d}^{2.0}|

### 公式

（1）分支公式
$$
y=
\begin{cases}
-x,\quad x\leq 0\\
x, \quad x>0
\end{cases}
\tag{1}
$$
markdown公式如下：

```md
$
y=
\begin{cases}
-x,\quad x\leq 0\\
x, \quad x>0
\end{cases}
\tag{1}
$
```

### 其他环境

但是下面这些标签环境在很多markdown中不能解析
|环境名称|描述|
|:----:|:----:|
|align|最基本的对齐环境|
|multline|非对齐环境|
|gather|无对齐的连续方程|

---

### 矩阵

$$
\begin{matrix}
1 & 2 & 3\\
4 & 5 & 6 \\
7 & 8 & 9
\end{matrix}
\tag{1}
$$

```md
$$
\begin{matrix}
1 & 2 & 3\\
4 & 5 & 6 \\
7 & 8 & 9
\end{matrix}
\tag{1}
$$
```

---

### 括号

$$\left(
\begin{matrix}
1 & 2 & 3\\
4 & 5 & 6 \\
7 & 8 & 9
\end{matrix}
\right)
\tag{2}
$$

```md
$$\left(
\begin{matrix}
1 & 2 & 3\\
4 & 5 & 6 \\
7 & 8 & 9
\end{matrix}
\right)
\tag{2}
$$
```

---

### 大括号

$$\left\{
\begin{matrix}
1 & 2 & 3\\
4 & 5 & 6 \\
7 & 8 & 9
\end{matrix}
\right\}
\tag{4}
$$

```md
$$\left\{
\begin{matrix}
1 & 2 & 3\\
4 & 5 & 6 \\
7 & 8 & 9
\end{matrix}
\right\}
\tag{4}
$$
```

---

## 汇总

### 普通符号

$$\pm \times \div \mid$$

```md
$\pm \times \div \mid$
```

---

### 对数运算

$$\log \lg \ln$$

```md
$\bot \angle 30^\circ \sin \cos \tan \cot \sec \csc$
```

---

### 微积分运算

$$y{\prime}x \int \iint \iiint \oint \lim \infty \nabla$$

```md
$y{\prime}x \int \iint \iiint \oint \lim \infty \nabla$
```

---

### 逻辑运算

$$\because \therefore \forall \exists$$

```md
$\because \therefore \forall \exists$
```

---

### 连线

$$\overline{a+b+c+d}

\underline{a+b+c+d}

\overbrace{a+\underbrace{b+c}_{1.0}+d}^{2.0}

\hat{y} \check{y} \breve{y}$$

```md
$\overline{a+b+c+d}

\underline{a+b+c+d}

\overbrace{a+\underbrace{b+c}_{1.0}+d}^{2.0}

\hat{y} \check{y} \breve{y}$
```

---

### 上下标

^表示上标，_表示下标，如果上标或下标内容多于一个字符，则使用 {} 括起来  
示例：
$$x^{y^z} = (1+e^x)^{-2xy^w}$$

```md
$x^{y^z} = (1+e^x)^{-2xy^w}$
```

---

### 关于括号

"() [] "直接写就行，而"{}"则需要转义  
示例 ：
$$f(x, y) = x^2 + y^2, x \epsilon [0, 100], y \epsilon \{3, 4, 5\}$$

```md
$f(x, y) = x^2 + y^2, x \epsilon [0, 100], y \epsilon \{3, 4, 5\}$
```

有时候括号需要大号的，普通括号不好看，此时需要使用\left和\right加大括号的大小。  
示例：
$$(\frac {x} {y})^2 , \left(\frac {x} {y} \right)^2$$

```md
$(\frac {x} {y})^2 , \left(\frac {x} {y} \right)^2$
```

\left 和 \right必须成对出现，对于不显示的一边可以使用 . 代替。  
示例：
$$\left. \frac{du}{dx} \right| _{x=0}$$

```md
$\left. \frac{du}{dx} \right| _{x=0}$
```

---

### 分数

使用 \frac{分子}{分母}，或者使用 分子 \over 分母  
示例：
$$\frac{1}{2x+1}$$
$${{1} \over {2x+1}}$$

```md
$\frac{1}{2x+1}$$
${{1} \over {2x+1}}$
```

---

### 开方

使用 \sqrt[n]{a}  
示例：
$$\sqrt[3]{9}$$
$$\sqrt{16}$$

```md
$\sqrt[3]{9}$
$\sqrt{16}$
```

---

### 省略号

有两种省略号，\ldots 表示语文本底线对其的省略号，\cdots 表示与文本中线对其的省略号，\cdot 表示一个点，也就是点乘号  
示例：
$$f(x_1,x_2,\ldots,x_n) = x_1^2+x_2^2+\cdots+x_n^2$$

```md
$f(x_1,x_2,\ldots,x_n) = x_1^2+x_2^2+\cdots+x_n^2$
```

---

### 向量

使用 \vec{a}  
示例：
$$\vec a \cdot \vec b = 0$$

```md
$\vec a \cdot \vec b = 0$
```

---

### 积分

示例：$$ \int_0^1x^2dx$$

```md
$\int_0^1x^2dx$
```

---

### 极限

示例：$ \lim_{n\rightarrow+\infty}\frac{1}{n(n+1)}$

```md
$\lim_{n\rightarrow+\infty}\frac{1}{n(n+1)}$
```

---

### 累加/累乘

示例： $\sum_1^n\frac{1}{x^2}$$, $$\prod_{i=0}^n{1 \over {x^2}}$

```md
$\sum_1^n\frac{1}{x^2}$$, $$\prod_{i=0}^n{1 \over {x^2}}$
```

---

### 希腊字母

示例： $\alpha \beta \gamma \Gamma \delta \Delta \epsilon \varepsilon \zeta \eta \theta \Theta \vartheta \iota \kappa \lambda \Lambda \mu \nu \xi \Xi \pi \Pi \varpi \rho \varrho \sigma \Sigma \varsigma \tau \upsilon \Upsilon \phi \Phi \varphi \chi \psi \Psi \Omega \omega$

```md
$\alpha \beta \gamma \Gamma \delta \Delta \epsilon \varepsilon \zeta \eta \theta \Theta \vartheta \iota \kappa \lambda \Lambda \mu \nu \xi \Xi \pi \Pi \varpi \rho \varrho \sigma \Sigma \varsigma \tau \upsilon \Upsilon \phi \Phi \varphi \chi \psi \Psi \Omega \omega$
```

---

### 需要转义的字符

$$\# \$ \%\&\_\{\}$$

```md
$\# \$ \%\&\_\{\}$$
```

---
