import{ah as n,ai as p,ak as a,al as e,am as l,an as i,aj as t}from"./app-DNzEwVPn.js";const c="/assets/image/005/1.png",d="/assets/image/005/2.png",h="/assets/image/005/3.png",o="/assets/image/005/4.png",r="/assets/image/005/5.png",g="/assets/image/005/6.png",m="/assets/image/005/7.png",u="/assets/image/005/8.png",k="/assets/image/005/9.png",b="/assets/image/005/10.png",A="/assets/image/005/11.png",_="/assets/image/005/12.png",f="/assets/image/005/13.png",v="/assets/image/005/14.png",B={};function F(x,s){return t(),p("div",null,[s[0]||(s[0]=a("p",null,[e("本文基于sublime的PlantUML插件绘制类图。如需了解插件安装，请点击"),a("a",{href:"sublime-plantuml"},"Sublime安装PlantUML插件")],-1)),l(" more "),s[1]||(s[1]=i('<h2 id="_1-类的uml表示" tabindex="-1"><a class="header-anchor" href="#_1-类的uml表示"><span>1 类的UML表示</span></a></h2><p>使用UML表示一个类，主要由三部分组成。<code>类名</code>、<code>属性</code>、<code>方法</code>。其中<code>属性</code>和<code>方法</code>的访问修饰符用 <code>-</code> 、<code>#</code> 、<code>+</code> 表示 <code>private</code>、<code>protected</code>、<code>public</code>。</p><img src="'+c+`" width="200"><p>如图所示，表示<code>A</code>类有一个<code>private</code>属性，<code>protected</code> 构造函数和<code>public</code>方法。</p><div class="language-uml" data-highlighter="shiki" data-ext="uml" data-title="uml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@startuml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class A{</span></span>
<span class="line"><span>	- String field</span></span>
<span class="line"><span>	+ A()</span></span>
<span class="line"><span>	# void method()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>note right: 这是测试类 A</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@enduml</span></span></code></pre></div><h2 id="_2-类的关系" tabindex="-1"><a class="header-anchor" href="#_2-类的关系"><span>2 类的关系</span></a></h2><p>在面向对象语言中，类的关系有很多种，可以概括为三类：<code>泛化</code>、<code>依赖</code>、<code>关联</code>。</p><h3 id="_2-1-泛化" tabindex="-1"><a class="header-anchor" href="#_2-1-泛化"><span>2.1 泛化</span></a></h3><p>泛化指父类跟子类的关系,表示<code>is-a</code>的关系。如父类是抽象类或普通类，则这种关系叫继承。如，父类是接口，则这种关系叫实现。UML中，继承和实现由不同的标记表示。</p><h4 id="_2-1-1-继承" tabindex="-1"><a class="header-anchor" href="#_2-1-1-继承"><span>2.1.1 继承</span></a></h4><p>PlantUML用 <code>--|&gt;</code> 表示继承关系。实线和三角形的抽象表示，指向谁，即继承谁。</p><div class="language-uml" data-highlighter="shiki" data-ext="uml" data-title="uml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@startuml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    class A</span></span>
<span class="line"><span>    abstract B</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &#39; A 继承 B</span></span>
<span class="line"><span>    A --|&gt; B</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@enduml</span></span></code></pre></div><img src="`+d+`" width="60"><h4 id="_2-1-2-实现" tabindex="-1"><a class="header-anchor" href="#_2-1-2-实现"><span>2.1.2 实现</span></a></h4><p>PlantUML用 <code>..|&gt;</code> 表示实现关系。虚和三角形的抽象表示，指向谁，即实现谁。</p><div class="language-uml" data-highlighter="shiki" data-ext="uml" data-title="uml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@startuml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    class A</span></span>
<span class="line"><span>    interface C</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &#39; A 实现 C</span></span>
<span class="line"><span>    A ..|&gt; C</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@enduml</span></span></code></pre></div><img src="`+h+`" width="60"><h3 id="_2-2-依赖" tabindex="-1"><a class="header-anchor" href="#_2-2-依赖"><span>2.2 依赖</span></a></h3><p>类之间，最弱的关联方式。常用于在A类的方法中使用B类的对象作为参数、局部变量或者对B类静态方法的调用。</p><p>PlantUML用 <code>..&gt;</code> 表示依赖关系。虚线和箭头的抽象表示，指向谁，即依赖谁。</p><div class="language-uml" data-highlighter="shiki" data-ext="uml" data-title="uml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@startuml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    class A</span></span>
<span class="line"><span>    class B</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &#39; A 依赖 B</span></span>
<span class="line"><span>    A ..&gt; B</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@enduml</span></span></code></pre></div><img src="`+o+`" width="60"><h3 id="_2-3-关联" tabindex="-1"><a class="header-anchor" href="#_2-3-关联"><span>2.3 关联</span></a></h3><p>关联关系，即对象之间的引用关系。常使用类的属性表达。</p><h4 id="_2-3-1-单向关联" tabindex="-1"><a class="header-anchor" href="#_2-3-1-单向关联"><span>2.3.1 单向关联</span></a></h4><p>B类作为A类的属性，表示A类与B类有关联。<br> PlantUML用 <code>--&gt;</code> 表示单向关联。实线线和箭头的抽象表示，指向谁，即关联谁。</p><div class="language-uml" data-highlighter="shiki" data-ext="uml" data-title="uml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@startuml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	class A{</span></span>
<span class="line"><span>		- B b</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	class B</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	&#39; A 关联 B</span></span>
<span class="line"><span>	A --&gt; B</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@enduml</span></span></code></pre></div><img src="`+r+`" width="60"><h4 id="_2-3-2-双向关联" tabindex="-1"><a class="header-anchor" href="#_2-3-2-双向关联"><span>2.3.2 双向关联</span></a></h4><p>B类作为A类的属性同时，A类也是B类的属性，表示双向关联。<br> PlantUML用 <code>--</code> 表示双向关联。或者用<code>&lt;--&gt;</code>。</p><div class="language-uml" data-highlighter="shiki" data-ext="uml" data-title="uml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@startuml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	class A{</span></span>
<span class="line"><span>		- B b</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	class B{</span></span>
<span class="line"><span>		- A a</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	&#39; A 关联 B</span></span>
<span class="line"><span>	A -- B</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@enduml</span></span></code></pre></div><img src="`+g+'" width="60"><h4 id="_2-3-3-自关联" tabindex="-1"><a class="header-anchor" href="#_2-3-3-自关联"><span>2.3.3 自关联</span></a></h4><p>A类关联A类自身。常见于单例模式。</p><img src="'+m+`" width="100"><div class="language-uml" data-highlighter="shiki" data-ext="uml" data-title="uml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@startuml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	class A{</span></span>
<span class="line"><span>		- A a</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	&#39; A 关联 A</span></span>
<span class="line"><span>	A --&gt; A</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@enduml</span></span></code></pre></div><h4 id="_2-3-4-聚合" tabindex="-1"><a class="header-anchor" href="#_2-3-4-聚合"><span>2.3.4 聚合</span></a></h4><p>在关联关系的基础上，延伸出聚合关系，强的关联关系，表示<code>has-a</code>关系。整体与部分的关系，部分不依赖于整体，可独立存在。常用于成员变量。</p><p>如；汽车和轮胎的关系，轮胎可作为独立的商品出售。</p><p>PlantUML用 <code>o--</code> 表示聚合关系。实线和空心菱形的抽象表示，指向谁，表示谁是整体。</p><div class="language-uml" data-highlighter="shiki" data-ext="uml" data-title="uml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@startuml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	class Car{</span></span>
<span class="line"><span>		- List&lt;Wheel&gt; wheels</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	class Wheel</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	&#39; Car 关联 Wheel</span></span>
<span class="line"><span>	Car &quot;1&quot; o-- &quot;4&quot; Wheel</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@enduml</span></span></code></pre></div><img src="`+u+`" width="180"><p>图中数字<code>1</code>和<code>4</code>也表示一对多关联。<code>N</code>对<code>N</code>同理。</p><h4 id="_2-3-5-组合" tabindex="-1"><a class="header-anchor" href="#_2-3-5-组合"><span>2.3.5 组合</span></a></h4><p>在关联关系的基础上，延伸出另外一种关联关系，组合关系，表示<code>contains-a</code>关系。整体与部分的关系，部分依赖于整体，不可独立存在。常用于成员变量。</p><p>如：身体和动作的关系。</p><p>PlantUML用 <code>*--</code> 表示聚合关系。实线和实心菱形的抽象表示，指向谁，表示谁是整体。</p><div class="language-uml" data-highlighter="shiki" data-ext="uml" data-title="uml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@startuml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	class Body{</span></span>
<span class="line"><span>		- List&lt;Action&gt; actions</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	class Action</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	&#39; Body 关联 Action</span></span>
<span class="line"><span>	Body &quot;1&quot; *-- &quot;N&quot; Action</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@enduml</span></span></code></pre></div><img src="`+k+`" width="180"><h2 id="_3-plantuml排版" tabindex="-1"><a class="header-anchor" href="#_3-plantuml排版"><span>3 PlantUML排版</span></a></h2><p>相比较其他的UML软件或插件。PlantUML的优势在于，存储的是文本文件，可以方便的进行团队协作以及高度可定制化的依赖关系。但是，最大的缺点在于，排版是通过插件自动生成的，排版效果不尽人意。因此，PlantUML提供四个关键字 <code>up</code> <code>down</code> <code>left</code> <code>right</code>。指定类与类之间的相对关系。</p><h3 id="_3-1-default" tabindex="-1"><a class="header-anchor" href="#_3-1-default"><span>3.1 default</span></a></h3><div class="language-uml" data-highlighter="shiki" data-ext="uml" data-title="uml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@startuml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class A1</span></span>
<span class="line"><span>class B1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>A1 --&gt; B1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class A2</span></span>
<span class="line"><span>class B2</span></span>
<span class="line"><span>A2 &lt;-- B2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@enduml</span></span></code></pre></div><img src="`+b+`" width="180"><p>箭头向左时，被指向对象在上；<br> 箭头向右时，被指向对象在下。</p><h3 id="_3-2-up" tabindex="-1"><a class="header-anchor" href="#_3-2-up"><span>3.2 up</span></a></h3><div class="language-uml" data-highlighter="shiki" data-ext="uml" data-title="uml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@startuml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class A1</span></span>
<span class="line"><span>class B1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>A1 -up-&gt; B1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class A2</span></span>
<span class="line"><span>class B2</span></span>
<span class="line"><span>A2 &lt;-up- B2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@enduml</span></span></code></pre></div><img src="`+A+`" width="180"><p>使用up时，被指向对象在上。</p><h3 id="_3-3-down" tabindex="-1"><a class="header-anchor" href="#_3-3-down"><span>3.3 down</span></a></h3><div class="language-uml" data-highlighter="shiki" data-ext="uml" data-title="uml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@startuml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class A1</span></span>
<span class="line"><span>class B1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>A1 -down-&gt; B1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class A2</span></span>
<span class="line"><span>class B2</span></span>
<span class="line"><span>A2 &lt;-down- B2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@enduml</span></span></code></pre></div><img src="`+_+`" width="180"><p>使用down时，被指向对象在下。</p><h3 id="_3-4-left" tabindex="-1"><a class="header-anchor" href="#_3-4-left"><span>3.4 left</span></a></h3><div class="language-uml" data-highlighter="shiki" data-ext="uml" data-title="uml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@startuml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class A1</span></span>
<span class="line"><span>class B1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>A1 -left-&gt; B1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class A2</span></span>
<span class="line"><span>class B2</span></span>
<span class="line"><span>A2 &lt;-left- B2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@enduml</span></span></code></pre></div><p>使用left时，被指向对象在左。</p><img src="`+f+`" width="350"><h3 id="_3-5-right" tabindex="-1"><a class="header-anchor" href="#_3-5-right"><span>3.5 right</span></a></h3><div class="language-uml" data-highlighter="shiki" data-ext="uml" data-title="uml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@startuml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class A1</span></span>
<span class="line"><span>class B1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>A1 -right-&gt; B1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class A2</span></span>
<span class="line"><span>class B2</span></span>
<span class="line"><span>A2 &lt;-right- B2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@enduml</span></span></code></pre></div><img src="`+v+'" width="350"><p>使用right时，被指向对象在右。</p><h2 id="_4-总结" tabindex="-1"><a class="header-anchor" href="#_4-总结"><span>4 总结</span></a></h2><p>画类图，只是PlantUML的功能之一，还可以使用它画用例图、顺序图、活动图。更多用法，请关注后续博客或<a href="http://plantuml.com/" target="_blank" rel="noopener noreferrer">访问官网</a>。</p>',73))])}const L=n(B,[["render",F],["__file","plantuml.html.vue"]]),M=JSON.parse(`{"path":"/plantuml.html","title":"使用PlantUML绘制类图","lang":"zh-CN","frontmatter":{"title":"使用PlantUML绘制类图","date":"2018-12-05 09:03:37 +0800","categories":["开发工具"],"tag":["UML","PlantUML"],"description":"本文基于sublime的PlantUML插件绘制类图。如需了解插件安装，请点击Sublime安装PlantUML插件","head":[["link",{"rel":"canonical","href":"https://plugin-flueky.vuejs.press/plantuml.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope.github.io/plantuml.html"}],["meta",{"property":"og:site_name","content":"Flueky's 技术小站"}],["meta",{"property":"og:title","content":"使用PlantUML绘制类图"}],["meta",{"property":"og:description","content":"本文基于sublime的PlantUML插件绘制类图。如需了解插件安装，请点击Sublime安装PlantUML插件"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-16T14:32:21.000Z"}],["meta",{"property":"article:tag","content":"UML"}],["meta",{"property":"article:tag","content":"PlantUML"}],["meta",{"property":"article:published_time","content":"2018-12-05T01:03:37.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-16T14:32:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用PlantUML绘制类图\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-12-05T01:03:37.000Z\\",\\"dateModified\\":\\"2024-10-16T14:32:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Flueky Zuo\\",\\"url\\":\\"https://flueky.github.io/blog/\\",\\"email\\":\\"flueky.zuo@gmail.com\\"}]}"]]},"headers":[{"level":2,"title":"1 类的UML表示","slug":"_1-类的uml表示","link":"#_1-类的uml表示","children":[]},{"level":2,"title":"2 类的关系","slug":"_2-类的关系","link":"#_2-类的关系","children":[{"level":3,"title":"2.1 泛化","slug":"_2-1-泛化","link":"#_2-1-泛化","children":[]},{"level":3,"title":"2.2 依赖","slug":"_2-2-依赖","link":"#_2-2-依赖","children":[]},{"level":3,"title":"2.3 关联","slug":"_2-3-关联","link":"#_2-3-关联","children":[]}]},{"level":2,"title":"3 PlantUML排版","slug":"_3-plantuml排版","link":"#_3-plantuml排版","children":[{"level":3,"title":"3.1 default","slug":"_3-1-default","link":"#_3-1-default","children":[]},{"level":3,"title":"3.2 up","slug":"_3-2-up","link":"#_3-2-up","children":[]},{"level":3,"title":"3.3 down","slug":"_3-3-down","link":"#_3-3-down","children":[]},{"level":3,"title":"3.4 left","slug":"_3-4-left","link":"#_3-4-left","children":[]},{"level":3,"title":"3.5 right","slug":"_3-5-right","link":"#_3-5-right","children":[]}]},{"level":2,"title":"4 总结","slug":"_4-总结","link":"#_4-总结","children":[]}],"git":{"createdTime":1729089141000,"updatedTime":1729089141000,"contributors":[{"name":"Flueky Zuo","email":"flueky.zuo@zoom.us","commits":1}]},"readingTime":{"minutes":4.2,"words":1259},"filePathRelative":"plantuml.md","localizedDate":"2018年12月5日","excerpt":"<p>本文基于sublime的PlantUML插件绘制类图。如需了解插件安装，请点击<a href=\\"sublime-plantuml\\">Sublime安装PlantUML插件</a></p>\\n","autoDesc":true}`);export{L as comp,M as data};
