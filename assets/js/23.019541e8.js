(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{434:function(t,v,e){"use strict";e.r(v);var a=e(2),i=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"jdk-和-jre-有什么区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#jdk-和-jre-有什么区别"}},[t._v("#")]),t._v(" JDK 和 JRE 有什么区别？")]),t._v(" "),v("ul",[v("li",[t._v("JDK：Java Development Kit 的简称，java 开发工具包，提供了 java 的开发环境和运行环境。")]),t._v(" "),v("li",[t._v("JRE：Java Runtime Environment 的简称，java 运行环境，为 java 的运行提供了所需环境。")])]),t._v(" "),v("h2",{attrs:{id:"和-equals-的区别是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#和-equals-的区别是什么"}},[t._v("#")]),t._v(" == 和 equals 的区别是什么？")]),t._v(" "),v("ul",[v("li",[t._v("==比较的是值，对于基础类型来说，比较的是数值，对于引用来说，比较的是引用的地址值")]),t._v(" "),v("li",[t._v("equals本质上是==比较，只是在Java中string重写了该方法，让其比较的是字符串的值")])]),t._v(" "),v("h2",{attrs:{id:"string、stringbuffer、stringbuilder的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#string、stringbuffer、stringbuilder的区别"}},[t._v("#")]),t._v(" String、StringBuffer、StringBuilder的区别？")]),t._v(" "),v("ul",[v("li",[t._v("String 和 StringBuffer、StringBuilder 的区别在于 String 声明的是不可变的对象，每次操作都会生成新的 String 对象，然后将指针指向新的 String 对象，而 StringBuffer、StringBuilder 可以在原有对象的基础上进行操作，所以在经常改变字符串内容的情况下最好不要使用 String。")]),t._v(" "),v("li",[t._v("StringBuffer 和 StringBuilder 最大的区别在于，StringBuffer 是线程安全的，而 StringBuilder 是非线程安全的，但 StringBuilder 的性能却高于 StringBuffer，所以在单线程环境下推荐使用 StringBuilder，多线程环境下推荐使用 StringBuffer。")])]),t._v(" "),v("h2",{attrs:{id:"string-str-i-与-string-str-new-string-i-一样吗"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#string-str-i-与-string-str-new-string-i-一样吗"}},[t._v("#")]),t._v(' String str="i"与 String str=new String("i")一样吗？')]),t._v(" "),v("ul",[v("li",[t._v('String str="i"的方式，java 虚拟机会将其分配到常量池中；而 String str=new String("i") 则会被分到堆内存中')])]),t._v(" "),v("h2",{attrs:{id:"创建线程有哪几种方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#创建线程有哪几种方式"}},[t._v("#")]),t._v(" 创建线程有哪几种方式？")]),t._v(" "),v("ul",[v("li",[t._v("继承 Thread 重写 run 方法")]),t._v(" "),v("li",[t._v("实现 Runnable 接口")]),t._v(" "),v("li",[t._v("实现 Callable 接口")])]),t._v(" "),v("h2",{attrs:{id:"runnable-和-callable-的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#runnable-和-callable-的区别"}},[t._v("#")]),t._v(" runnable 和 callable 的区别？")]),t._v(" "),v("ul",[v("li",[t._v("runnable 没有返回值，callable 可以拿到有返回值，callable 可以看作是 runnable 的补充。")])]),t._v(" "),v("h2",{attrs:{id:"线程有哪些状态"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#线程有哪些状态"}},[t._v("#")]),t._v(" 线程有哪些状态？")]),t._v(" "),v("ul",[v("li",[t._v("NEW 尚未启动")]),t._v(" "),v("li",[t._v("RUNNABLE 正在执行中")]),t._v(" "),v("li",[t._v("BLOCKED 阻塞的（被同步锁或者IO锁阻塞）")]),t._v(" "),v("li",[t._v("WAITING 永久等待状态")]),t._v(" "),v("li",[t._v("TIMED_WAITING 等待指定的时间重新被唤醒的状态")]),t._v(" "),v("li",[t._v("TERMINATED 执行完成")])]),t._v(" "),v("h2",{attrs:{id:"sleep-和-wait-有什么区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#sleep-和-wait-有什么区别"}},[t._v("#")]),t._v(" sleep() 和 wait() 有什么区别？")]),t._v(" "),v("ul",[v("li",[t._v("类的不同：sleep() 来自 Thread，wait() 来自 Object。")]),t._v(" "),v("li",[t._v("释放锁：sleep() 不释放锁；wait() 释放锁。")]),t._v(" "),v("li",[t._v("用法不同：sleep() 时间到会自动恢复；wait() 可以使用 notify()/notifyAll()直接唤醒。")])]),t._v(" "),v("h2",{attrs:{id:"notify-和-notifyall-有什么区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#notify-和-notifyall-有什么区别"}},[t._v("#")]),t._v(" notify()和 notifyAll()有什么区别？")]),t._v(" "),v("ul",[v("li",[t._v("notifyAll()会唤醒所有的线程，notify()之后唤醒一个线程。notifyAll() 调用后，会将全部线程由等待池移到锁池，然后参与锁的竞争，竞争成功则继续执行，如果不成功则留在锁池等待锁被释放后再次参与竞争。而notify()只会唤醒一个线程，具体唤醒哪一个线程由虚拟机控制。")])]),t._v(" "),v("h2",{attrs:{id:"线程的-run-和-start-有什么区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#线程的-run-和-start-有什么区别"}},[t._v("#")]),t._v(" 线程的 run()和 start()有什么区别?")]),t._v(" "),v("ul",[v("li",[t._v("start()方法用于启动线程，run()方法用于执行线程的运行时代码。run() 可以重复调用，而 start()只能调用一次。")])]),t._v(" "),v("h2",{attrs:{id:"线程池都有哪些状态"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#线程池都有哪些状态"}},[t._v("#")]),t._v(" 线程池都有哪些状态？")]),t._v(" "),v("ul",[v("li",[t._v("RUNNING：这是最正常的状态，接受新的任务，处理等待队列中的任务。")]),t._v(" "),v("li",[t._v("SHUTDOWN：不接受新的任务提交，但是会继续处理等待队列中的任务。")]),t._v(" "),v("li",[t._v("STOP：不接受新的任务提交，不再处理等待队列中的任务，中断正在执行任务的线程。")]),t._v(" "),v("li",[t._v("TIDYING：所有的任务都销毁了，workCount 为 0，线程池的状态在转换为 TIDYING 状态时，会执行钩子方法 terminated()。")]),t._v(" "),v("li",[t._v("TERMINATED：terminated()方法结束后，线程池的状态就会变成这个。")])]),t._v(" "),v("h2",{attrs:{id:"线程池中-submit-和-execute-方法有什么区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#线程池中-submit-和-execute-方法有什么区别"}},[t._v("#")]),t._v(" 线程池中 submit()和 execute()方法有什么区别？")]),t._v(" "),v("ul",[v("li",[t._v("execute()：只能执行 Runnable 类型的任务。")]),t._v(" "),v("li",[t._v("submit()：可以执行 Runnable 和 Callable 类型的任务。")])]),t._v(" "),v("h2",{attrs:{id:"synchronized-和-volatile-的区别是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#synchronized-和-volatile-的区别是什么"}},[t._v("#")]),t._v(" synchronized 和 volatile 的区别是什么？")]),t._v(" "),v("ul",[v("li",[t._v("volatile 是变量修饰符；synchronized 是修饰类、方法、代码段。")]),t._v(" "),v("li",[t._v("volatile 仅能实现变量的修改可见性，不能保证原子性；而 synchronized 则可以保证变量的修改可见性和原子性。")]),t._v(" "),v("li",[t._v("volatile 不会造成线程的阻塞；synchronized 可能会造成线程的阻塞。")])]),t._v(" "),v("h2",{attrs:{id:"synchronized-和-lock-有什么区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#synchronized-和-lock-有什么区别"}},[t._v("#")]),t._v(" synchronized 和 Lock 有什么区别？")]),t._v(" "),v("ul",[v("li",[t._v("synchronized 可以给类、方法、代码块加锁；而 lock 只能给代码块加锁。")]),t._v(" "),v("li",[t._v("synchronized 不需要手动获取锁和释放锁，使用简单，发生异常会自动释放锁，不会造成死锁；而 lock 需要自己加锁和释放锁，如果使用不当没有 unLock()去释放锁就会造成死锁。")]),t._v(" "),v("li",[t._v("通过 Lock 可以知道有没有成功获取锁，而 synchronized 却无法办到。")])]),t._v(" "),v("h2",{attrs:{id:"什么是反射"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是反射"}},[t._v("#")]),t._v(" 什么是反射？")]),t._v(" "),v("ul",[v("li",[t._v("反射是在运行状态中，对于任意一个类，都能够知道这个类的所有属性和方法；对于任意一个对象，都能够调用它的任意一个方法和属性；这种动态获取的信息以及动态调用对象的方法的功能称为 java 语言的反射机制。")])]),t._v(" "),v("h2",{attrs:{id:"什么是-java-序列化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是-java-序列化"}},[t._v("#")]),t._v(" 什么是 java 序列化？")]),t._v(" "),v("ul",[v("li",[t._v("java 序列化是为了保存各种对象在内存中的状态，并且可以把保存的对象状态再读出来。")])]),t._v(" "),v("h2",{attrs:{id:"jsp-和-servlet-有什么区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#jsp-和-servlet-有什么区别"}},[t._v("#")]),t._v(" jsp 和 servlet 有什么区别？")]),t._v(" "),v("ul",[v("li",[t._v("jsp 是 servlet 技术的扩展，本质上就是 servlet 的简易方式。servlet 和 jsp 最主要的不同点在于，servlet 的应用逻辑是在 java 文件中，并且完全从表示层中的 html 里分离开来，而 jsp 的情况是 java 和 html 可以组合成一个扩展名为 jsp 的文件。jsp 侧重于视图，servlet 主要用于控制逻辑。")])]),t._v(" "),v("h2",{attrs:{id:"jsp-有哪些内置对象-作用分别是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#jsp-有哪些内置对象-作用分别是什么"}},[t._v("#")]),t._v(" jsp 有哪些内置对象？作用分别是什么？")]),t._v(" "),v("ul",[v("li",[t._v("request：封装客户端的请求，其中包含来自 get 或 post 请求的参数；")]),t._v(" "),v("li",[t._v("response：封装服务器对客户端的响应；")]),t._v(" "),v("li",[t._v("pageContext：通过该对象可以获取其他对象；")]),t._v(" "),v("li",[t._v("session：封装用户会话的对象；")]),t._v(" "),v("li",[t._v("application：封装服务器运行环境的对象；")]),t._v(" "),v("li",[t._v("out：输出服务器响应的输出流对象；")]),t._v(" "),v("li",[t._v("config：web 应用的配置对象；")]),t._v(" "),v("li",[t._v("page：jsp 页面本身（相当于 java 程序中的 this）；")]),t._v(" "),v("li",[t._v("exception：封装页面抛出异常的对象。")])]),t._v(" "),v("h2",{attrs:{id:"jsp-的-4-种作用域"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#jsp-的-4-种作用域"}},[t._v("#")]),t._v(" jsp 的 4 种作用域？")]),t._v(" "),v("ul",[v("li",[t._v("page：代表与一个页面相关的对象和属性。")]),t._v(" "),v("li",[t._v("request：代表与客户端发出的一个请求相关的对象和属性。一个请求可能跨越多个页面，涉及多个 web 组件；需要在页面显示的临时数据可以置于此作用域。")]),t._v(" "),v("li",[t._v("session：代表与某个用户与服务器建立的一次会话相关的对象和属性。跟某个用户相关的数据应该放在用户自己的 session 中。")]),t._v(" "),v("li",[t._v("application：代表与整个 web 应用程序相关的对象和属性，它实质上是跨越整个 web 应用程序，包括多个页面、请求和会话的一个全局作用域。")])]),t._v(" "),v("h2",{attrs:{id:"session-和-cookie-有什么区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#session-和-cookie-有什么区别"}},[t._v("#")]),t._v(" session 和 cookie 有什么区别？")]),t._v(" "),v("ul",[v("li",[t._v("存储位置不同：session 存储在服务器端；cookie 存储在浏览器端。")]),t._v(" "),v("li",[t._v("安全性不同：cookie 安全性一般，在浏览器存储，可以被伪造和修改。")]),t._v(" "),v("li",[t._v("容量和个数限制：cookie 有容量限制，每个站点下的 cookie 也有个数限制。")]),t._v(" "),v("li",[t._v("存储的多样性：session 可以存储在 redis 中、数据库中、应用程序中；而 cookie 只能存储在浏览器中。")])]),t._v(" "),v("h2",{attrs:{id:"spring-mvc-和-struts-的区别是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#spring-mvc-和-struts-的区别是什么"}},[t._v("#")]),t._v(" spring mvc 和 struts 的区别是什么？")]),t._v(" "),v("ul",[v("li",[t._v("拦截级别：struts2 是类级别的拦截；spring mvc 是方法级别的拦截。")]),t._v(" "),v("li",[t._v("数据独立性：spring mvc 的方法之间基本上独立的，独享 request 和 response 数据，请求数据通过参数获取，处理结果通过 ModelMap 交回给框架，方法之间不共享变量；而 struts2 虽然方法之间也是独立的，但其所有 action 变量是共享的，这不会影响程序运行，却给我们编码和读程序时带来了一定的麻烦。")]),t._v(" "),v("li",[t._v("拦截机制：struts2 有以自己的 interceptor 机制，spring mvc 用的是独立的 aop 方式，这样导致struts2 的配置文件量比 spring mvc 大。")]),t._v(" "),v("li",[t._v("对 ajax 的支持：spring mvc 集成了ajax，所有 ajax 使用很方便，只需要一个注解 @ResponseBody 就可以实现了；而 struts2 一般需要安装插件或者自己写代码才行。")])]),t._v(" "),v("h2",{attrs:{id:"什么是-xss-攻击"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是-xss-攻击"}},[t._v("#")]),t._v(" 什么是 XSS 攻击？")]),t._v(" "),v("ul",[v("li",[t._v("即跨站脚本攻击，它是 web 程序中常见的漏洞。原理是攻击者往 web 页面里插入恶意的脚本代码（css 代码、javascript 代码等），当用户浏览该页面时，嵌入其中的脚本代码会被执行，从而达到恶意攻击用户的目的，如盗取用户 cookie、破坏页面结构、重定向到其他网站等。")]),t._v(" "),v("li",[t._v("预防 XSS 的核心是必须对输入的数据做过滤处理。")])]),t._v(" "),v("h2",{attrs:{id:"什么是-csrf-攻击"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是-csrf-攻击"}},[t._v("#")]),t._v(" 什么是 CSRF 攻击？")]),t._v(" "),v("ul",[v("li",[t._v("Cross-Site Request Forgery（中文：跨站请求伪造），可以理解为攻击者盗用了你的身份，以你的名义发送恶意请求，比如：以你名义发送邮件、发消息、购买商品，虚拟货币转账等。")]),t._v(" "),v("li",[t._v("验证请求来源地址；")]),t._v(" "),v("li",[t._v("关键操作添加验证码；")]),t._v(" "),v("li",[t._v("在请求地址添加 token 并验证。")])]),t._v(" "),v("h2",{attrs:{id:"常见的异常类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常见的异常类"}},[t._v("#")]),t._v(" 常见的异常类？")]),t._v(" "),v("ul",[v("li",[t._v("NullPointerException 空指针异常")]),t._v(" "),v("li",[t._v("ClassNotFoundException 指定类不存在")]),t._v(" "),v("li",[t._v("NumberFormatException 字符串转换为数字异常")]),t._v(" "),v("li",[t._v("IndexOutOfBoundsException 数组下标越界异常")]),t._v(" "),v("li",[t._v("ClassCastException 数据类型转换异常")]),t._v(" "),v("li",[t._v("FileNotFoundException 文件未找到异常")]),t._v(" "),v("li",[t._v("NoSuchMethodException 方法不存在异常")]),t._v(" "),v("li",[t._v("IOException IO 异常")]),t._v(" "),v("li",[t._v("SocketException Socket 异常")])]),t._v(" "),v("h2",{attrs:{id:"类装载过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#类装载过程"}},[t._v("#")]),t._v(" 类装载过程")]),t._v(" "),v("ul",[v("li",[t._v("加载：根据查找路径找到相应的 class 文件然后导入；")]),t._v(" "),v("li",[t._v("检查：检查加载的 class 文件的正确性；")]),t._v(" "),v("li",[t._v("准备：给类中的静态变量分配内存空间；")]),t._v(" "),v("li",[t._v("解析：虚拟机将常量池中的符号引用替换成直接引用的过程。符号引用就理解为一个标示，而在直接引用直接指向内存中的地址；")]),t._v(" "),v("li",[t._v("初始化：对静态变量和静态代码块执行初始化工作。")])]),t._v(" "),v("h2",{attrs:{id:"序列化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#序列化"}},[t._v("#")]),t._v(" 序列化")]),t._v(" "),v("ul",[v("li",[t._v("序列化：把Java对象转化为字节序列的过程")]),t._v(" "),v("li",[t._v("反序列化：把字节序列恢复成Java对象的过程")]),t._v(" "),v("li",[t._v("作用：对象序列化可以使得对象保存到磁盘或者进行远程传输")]),t._v(" "),v("li",[t._v("序列化就是将一个对象转换成字节序列，方便存储和传输。\n"),v("ul",[v("li",[t._v("序列化: ObjectOutputStream.writeObject()")]),t._v(" "),v("li",[t._v("反序列化: ObjectInputStream.readObject()")]),t._v(" "),v("li",[t._v("不会对静态变量进行序列化，因为序列化只是保存对象的状态，静态变量属于类的状态")]),t._v(" "),v("li",[t._v("transient 关键字可以使一些属性不会被序列化。")])])])]),t._v(" "),v("h2",{attrs:{id:"静态类、静态方法、静态变量"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#静态类、静态方法、静态变量"}},[t._v("#")]),t._v(" 静态类、静态方法、静态变量")]),t._v(" "),v("ul",[v("li",[t._v("静态类只能是内部类")]),t._v(" "),v("li",[t._v("静态代码块和静态变量的执行顺序和在类中的位置有关，谁在前谁先执行")]),t._v(" "),v("li",[t._v("静态方法只在调用时执行")]),t._v(" "),v("li",[t._v("静态内部类只在调用时加载")]),t._v(" "),v("li",[t._v("所有的静态资源只会加载一次，然后永久的存在于内存中，直至程序终止")])]),t._v(" "),v("h2",{attrs:{id:"双亲委派"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#双亲委派"}},[t._v("#")]),t._v(" 双亲委派")]),t._v(" "),v("ul",[v("li",[t._v("原理：当类加载器去加载某一个class（字节码）文件时，首先会把这个任务委托给他的上级类加载器，递归这个操作，如果上级没有加载这个class文件，才会自己去加载")]),t._v(" "),v("li",[t._v("类加载器类型\n"),v("ul",[v("li",[t._v("Bootstrap ClassLoader（启动类加载器）：负责加载Java基础类，对应加载的文件是%JRE_HOME/lib/ 目录下的rt.jar、resources.jar、charsets.jar和class等")]),t._v(" "),v("li",[t._v("Extension ClassLoader（标准扩展类加载器）：对应加载的文件是%JRE_HOME/lib/ext 目录下的jar和class等")]),t._v(" "),v("li",[t._v("App ClassLoader（系统类加载器）：继承URLClassLoader。对应加载的应用程序classpath目录下的所有jar和class等")]),t._v(" "),v("li",[t._v("CustomClassLoader（用户自定义类加载器）：我们可以自定义类加载器，并可以加载指定路径下的class文件")])])]),t._v(" "),v("li",[t._v("作用\n"),v("ul",[v("li",[t._v("防止加载同一个class文件，通过委托询问上级是否加载该class文件，如果加载了，则不会重新加载，保证了数据安全")]),t._v(" "),v("li",[t._v("保证核心class文件不被篡改，即使被篡改也不会被加载，即使被加载也不会是同一个class对象，因为不同的加载器加载同一个.class也不是同一个Class对象。这样则保证了Class的执行安全。")])])])]),t._v(" "),v("h2",{attrs:{id:"线程池"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#线程池"}},[t._v("#")]),t._v(" 线程池")]),t._v(" "),v("ul",[v("li",[t._v("思想：一种基于池化的线程管理思想")]),t._v(" "),v("li",[t._v("解决的问题\n"),v("ul",[v("li",[t._v("频繁的申请、销毁、调度资源，带来巨大的消耗")]),t._v(" "),v("li",[t._v("对资源无限的申请缺少抑制手段，引发系统资源耗尽的风险")]),t._v(" "),v("li",[t._v("系统无法管理内部资源分布，降低系统的稳定性")])])]),t._v(" "),v("li",[t._v("带来的好处\n"),v("ul",[v("li",[t._v("降低资源消耗")]),t._v(" "),v("li",[t._v("提高响应速度")]),t._v(" "),v("li",[t._v("提高线程的可管理性")])])]),t._v(" "),v("li",[t._v("线程关系\n"),v("ul",[v("li",[t._v("ThreadPoolExecutor和ScheduledThreadPoolExecutor最终都实现了Executor接口，ThreadPoolExecutor是ScheduledThreadPoolExecutor的父类")])])]),t._v(" "),v("li",[t._v("线程池创建参数\n"),v("ul",[v("li",[t._v("corePoolSize（核心线程数量）：线程池在初始化之后不会创建任何线程，等到有任务才会创建核心线程，核心线程不会被销毁，一经创建便是永存")]),t._v(" "),v("li",[t._v("maximumPoolSize（最大线程数量）：当核心线程都处于繁忙状态，且任务队列处于满载状态时，这时如果还有任务进来，就会继续创建线程，当达到最大线程数这个阈值时就会执行拒绝策略")]),t._v(" "),v("li",[t._v("keepAliverTime（存活时间）：如果当前线程池中线程大于核心线程数时，多余的空闲线程存活时间超过就会被回收")]),t._v(" "),v("li",[t._v("unit（存活时间单位）：就是时间单位")]),t._v(" "),v("li",[t._v("workQueue：（存放任务的队列）：核心线程数满的情况下如果还有任务进来就会存放在队列中\n"),v("ul",[v("li",[t._v("队列种类\n"),v("ul",[v("li",[t._v("LinkedBlockingQueue（无界队列）：意味着无限制，其他有限制，大小是int的最大值")]),t._v(" "),v("li",[t._v("ArrayBlockingQueue（有界队列）：可以自定义大小，到了阈值就会自动开启新线程，且不会超过最大线程")]),t._v(" "),v("li",[t._v("SynchronousQueue（同步队列）：Executors.newCachedThreadPool();默认使用的队列，没有存储元素的能力")])])])])]),t._v(" "),v("li",[t._v("threadFactory（线程工厂）：用来创建线程")]),t._v(" "),v("li",[t._v("handler（拒绝策略）：任务量超出线程池配置限制或者执行shutdown还在继续提交任务，会执行handler。\n"),v("ul",[v("li",[t._v("策略种类\n"),v("ul",[v("li",[t._v("ThreadPoolExecutor.AbortPolicy：丢弃任务，抛出异常")]),t._v(" "),v("li",[t._v("ThreadPoolExecutor.DiscardPolicy：丢弃任务，不抛出异常")]),t._v(" "),v("li",[t._v("ThreadPoolExecutor.DiscardOldestPolicy：丢弃队列最前面的任务，然后重新提交被拒绝的任务")]),t._v(" "),v("li",[t._v("ThreadPoolExecutor.CallerRunsPolicy：由调用线程（提交该任务的线程）处理该任务")])])])])])])]),t._v(" "),v("li",[t._v("快捷创建线程方法\n"),v("ul",[v("li",[t._v("Executors#newCachedThreadPool：创建可缓存的线程池，该线程池核心线程数为0，最大线程数无限大，使用的是SynchronousQueue不存储元素的队列")]),t._v(" "),v("li",[t._v("Executors#newSingleThreadExecutor：创建单线程的线程池，该线程池核心线程数为1，最大线程数也为1，所以只能存在一个线程，使用的队列是无界队列")]),t._v(" "),v("li",[t._v("Executors#newFixedThreadPool：创建固定长度的线程池：创建固定（由用户传入）核心线程，最大线程数等于核心线程数，使用的队列同样是无界队列")])])]),t._v(" "),v("li",[t._v("springboot使用线程池方法\n"),v("ul",[v("li",[t._v("@Async注解，在需要异步执行的方法上添加上@Async注解即可")]),t._v(" "),v("li",[t._v("自定义线程池，通过bean注解注入到springboot中")])])]),t._v(" "),v("li",[t._v("submit和execute方法区别\n"),v("ul",[v("li",[t._v("都属于线程池方法，execute只能提交Runnable类型的任务，submit可以提交Runnable和Callable类型的任务")]),t._v(" "),v("li",[t._v("execute会直接抛出执行任务的异常，submit会吃掉执行任务的异常，可通过Future的get方法将任务执行时的异常重新抛出")]),t._v(" "),v("li",[t._v("execute所属顶层接口是Executor，submit所属顶层接口是ExecutorService，实现类ThreadPoolExecutor重写了execute方法，抽象类AbstractExecutorService重写了submit方法")])])])])])}),[],!1,null,null,null);v.default=i.exports}}]);