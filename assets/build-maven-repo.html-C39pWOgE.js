import{ah as s,ai as a,al as e,an as i,ak as l,aj as p}from"./app-DrXZkkjN.js";const r="/assets/image/025/2.png",d="/assets/image/025/1.png",t={};function c(o,n){return p(),a("div",null,[n[0]||(n[0]=e("p",null,"自从公司使用 Maven 仓库管理代码后，一直想着有一个自己的代码仓库。虽然写的代码不多，但是不影响 Get 一项新技能。",-1)),i(" more "),n[1]||(n[1]=l(`<h2 id="_1-集成-maven" tabindex="-1"><a class="header-anchor" href="#_1-集成-maven"><span>1. 集成 Maven</span></a></h2><p>由于本人是做 Android 开发，于是通过集成 Maven 的 Gradle 插件，生成对应的 <code>aar</code> 和 <code>jar</code> 库。</p><p>在 Module 的 build.gradle 中，集成配置如下：<br> 、</p><div class="language-gradle line-numbers-mode" data-highlighter="shiki" data-ext="gradle" data-title="gradle" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 使用 Maven 插件</span></span>
<span class="line"><span>apply plugin: &#39;maven&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 远程库名称通常由三部分构成 ，groupId:artifactId:version</span></span>
<span class="line"><span>// 定义 group</span></span>
<span class="line"><span>group = &#39;com.flueky&#39;</span></span>
<span class="line"><span>// 定义 version</span></span>
<span class="line"><span>version = &#39;1.0.0&#39; // 指定版本</span></span>
<span class="line"><span>// artifactId 默认使用 module name</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 以上两个配置也可以在下面的 deployer 中定义</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 下面定义三种不同的 maven 仓库地址</span></span>
<span class="line"><span>// 1. 计算机中，用户目录下</span></span>
<span class="line"><span>def localMavenRepo = &#39;file://&#39; + new File(System.getProperty(&#39;user.home&#39;), &#39;.m2/repository&#39;).absolutePath</span></span>
<span class="line"><span>// 2. 工程目录下 等同 uri(&#39;../repository&#39;)</span></span>
<span class="line"><span>def projectMavenRepo = &#39;file://&#39; + rootDir.getAbsolutePath() + &#39;/repository&#39; </span></span>
<span class="line"><span>// 3. 自建的 Maven 私服上</span></span>
<span class="line"><span>def nexusMavenRepo = &#39;http://127.0.0.1:9000/repository/android/&#39;</span></span>
<span class="line"><span>// 下面是 Maven 私服的用户名和密码，上传时需要</span></span>
<span class="line"><span>def nexusUserName = &#39;admin&#39;</span></span>
<span class="line"><span>def nexusPassword = &#39;admin123&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>uploadArchives {</span></span>
<span class="line"><span>    repositories.mavenDeployer {</span></span>
<span class="line"><span>        // 指定导出到的仓库地址，三个任选一个</span></span>
<span class="line"><span>        repository(url: localMavenRepo)</span></span>
<span class="line"><span>        repository(url: projectMavenRepo)</span></span>
<span class="line"><span>        repository(url: nexusMavenRepo) {</span></span>
<span class="line"><span>            // 需要授权用户名和密码</span></span>
<span class="line"><span>            authentication(userName: nexusUserName, password: nexusPassword)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 下面三个定义的常量可以复写上面已定义的值</span></span>
<span class="line"><span>        pom.groupId = &quot;com.flueky&quot;// 唯一标识（通常为模块包名，也可以任意）</span></span>
<span class="line"><span>        pom.artifactId = &quot;maven-test&quot; // 项目名称（通常为类库模块名称，也可以任意）</span></span>
<span class="line"><span>        pom.version = &quot;1.0.0&quot; // 版本号</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置好上述代码后，生成 <code>aar</code> 或 <code>jar</code> 是由 Module 类型决定。</p><div class="language-gradle" data-highlighter="shiki" data-ext="gradle" data-title="gradle" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 生成 aar</span></span>
<span class="line"><span>apply plugin: &#39;com.android.library&#39;</span></span>
<span class="line"><span>// 生成 jar</span></span>
<span class="line"><span>apply plugin: &#39;java&#39;</span></span></code></pre></div><p>已本地私服为例，最终导出的远程库结构如下：</p><img src="`+r+'" width="300"><h2 id="_2-导出到-maven" tabindex="-1"><a class="header-anchor" href="#_2-导出到-maven"><span>2. 导出到 Maven</span></a></h2><p>配置完成后，即可在 Gradle 任务中查看。</p><img src="'+d+`" width="250"><p>点击 <code>uploadArchives</code> 即可完成导出。之后在对应的目录下查看。</p><h2 id="_3-使用-maven-仓库" tabindex="-1"><a class="header-anchor" href="#_3-使用-maven-仓库"><span>3. 使用 Maven 仓库</span></a></h2><p>针对前面配置的三种仓库地址，使用时需要分别作配置。</p><div class="language-gradle line-numbers-mode" data-highlighter="shiki" data-ext="gradle" data-title="gradle" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>allprojects {</span></span>
<span class="line"><span>    repositories {</span></span>
<span class="line"><span>        // 本地仓库</span></span>
<span class="line"><span>        mavenLocal()</span></span>
<span class="line"><span>        // 本地服务器</span></span>
<span class="line"><span>        maven {</span></span>
<span class="line"><span>            // 如果 nexus 私服具备匿名访问权限，无须配置用户名密码，</span></span>
<span class="line"><span>            // 具备上传权限的用户名和密码通常不开放使用。</span></span>
<span class="line"><span>            credentials {</span></span>
<span class="line"><span>                username &quot;flueky&quot;</span></span>
<span class="line"><span>                password &quot;123456&quot;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            url &#39;http://127.0.0.1:9000/repository/android/&#39;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 工程目录仓库</span></span>
<span class="line"><span>        maven { url &#39;file://&#39; + rootDir.getAbsolutePath() + &#39;/repository/&#39; }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后添加依赖。</p><div class="language-gradle" data-highlighter="shiki" data-ext="gradle" data-title="gradle" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>dependencies {</span></span>
<span class="line"><span>    implementation &#39;com.flueky:maven-test:1.0.0&#39;</span></span>
<span class="line"><span>    implementation &#39;com.flueky:lib-test:1.0.0&#39;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>最后，如何搭建 Maven 私服，没做介绍，主要是我也才上手，搭建私服，推荐使用 nexus 。</strong></p><p><a href="https://github.com/flueky/Flueky-Sample/tree/master/maven-sample" target="_blank" rel="noopener noreferrer">源码地址</a></p>`,19))])}const m=s(t,[["render",c],["__file","build-maven-repo.html.vue"]]),u=JSON.parse(`{"path":"/build-maven-repo.html","title":"自建 Maven 仓库","lang":"zh-CN","frontmatter":{"title":"自建 Maven 仓库","date":"2019-10-20 09:56:10 +0800","categoriy":["开发工具"],"tag":["Maven"],"description":"自从公司使用 Maven 仓库管理代码后，一直想着有一个自己的代码仓库。虽然写的代码不多，但是不影响 Get 一项新技能。","head":[["link",{"rel":"canonical","href":"https://plugin-flueky.vuejs.press/build-maven-repo.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope.github.io/build-maven-repo.html"}],["meta",{"property":"og:site_name","content":"Flueky's 技术小站"}],["meta",{"property":"og:title","content":"自建 Maven 仓库"}],["meta",{"property":"og:description","content":"自从公司使用 Maven 仓库管理代码后，一直想着有一个自己的代码仓库。虽然写的代码不多，但是不影响 Get 一项新技能。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T16:00:44.000Z"}],["meta",{"property":"article:tag","content":"Maven"}],["meta",{"property":"article:published_time","content":"2019-10-20T01:56:10.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-28T16:00:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"自建 Maven 仓库\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-10-20T01:56:10.000Z\\",\\"dateModified\\":\\"2024-10-28T16:00:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Flueky Zuo\\",\\"url\\":\\"https://flueky.github.io/blog/\\",\\"email\\":\\"flueky.zuo@gmail.com\\"}]}"]]},"headers":[{"level":2,"title":"1. 集成 Maven","slug":"_1-集成-maven","link":"#_1-集成-maven","children":[]},{"level":2,"title":"2. 导出到 Maven","slug":"_2-导出到-maven","link":"#_2-导出到-maven","children":[]},{"level":2,"title":"3. 使用 Maven 仓库","slug":"_3-使用-maven-仓库","link":"#_3-使用-maven-仓库","children":[]}],"git":{"createdTime":1730131244000,"updatedTime":1730131244000,"contributors":[{"name":"Flueky Zuo","email":"flueky.zuo@zoom.us","commits":1}]},"readingTime":{"minutes":2.2,"words":659},"filePathRelative":"build-maven-repo.md","localizedDate":"2019年10月20日","excerpt":"<p>自从公司使用 Maven 仓库管理代码后，一直想着有一个自己的代码仓库。虽然写的代码不多，但是不影响 Get 一项新技能。</p>\\n","autoDesc":true}`);export{m as comp,u as data};
