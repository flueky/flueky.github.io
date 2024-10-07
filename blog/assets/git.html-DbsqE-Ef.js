import{ah as n,ai as a,ak as e,al as i,am as l,aj as p}from"./app-3ZOh8pWm.js";const t={};function r(c,s){return p(),a("div",null,[s[0]||(s[0]=e("p",null,"记录 Git 常用命令",-1)),i(" more "),s[1]||(s[1]=l(`<h2 id="add" tabindex="-1"><a class="header-anchor" href="#add"><span>add</span></a></h2><details class="hint-container details"><summary>git add -h</summary><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>usage: git add [&lt;options&gt;] [--] &lt;pathspec&gt;...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    -n, --dry-run         dry run</span></span>
<span class="line"><span>    -v, --verbose         be verbose</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    -i, --interactive     interactive picking</span></span>
<span class="line"><span>    -p, --patch           select hunks interactively</span></span>
<span class="line"><span>    -e, --edit            edit current diff and apply</span></span>
<span class="line"><span>    -f, --force           allow adding otherwise ignored files</span></span>
<span class="line"><span>    -u, --update          update tracked files</span></span>
<span class="line"><span>    --renormalize         renormalize EOL of tracked files (implies -u)</span></span>
<span class="line"><span>    -N, --intent-to-add   record only the fact that the path will be added later</span></span>
<span class="line"><span>    -A, --all             add changes from all tracked and untracked files</span></span>
<span class="line"><span>    --ignore-removal      ignore paths removed in the working tree (same as --no-all)</span></span>
<span class="line"><span>    --refresh             don&#39;t add, only refresh the index</span></span>
<span class="line"><span>    --ignore-errors       just skip files which cannot be added because of errors</span></span>
<span class="line"><span>    --ignore-missing      check if - even missing - files are ignored in dry run</span></span>
<span class="line"><span>    --sparse              allow updating entries outside of the sparse-checkout cone</span></span>
<span class="line"><span>    --chmod (+|-)x        override the executable bit of the listed files</span></span>
<span class="line"><span>    --pathspec-from-file &lt;file&gt;</span></span>
<span class="line"><span>                          read pathspec from file</span></span>
<span class="line"><span>    --pathspec-file-nul   with --pathspec-from-file, pathspec elements are separated with NUL character</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="apply" tabindex="-1"><a class="header-anchor" href="#apply"><span>apply</span></a></h2><details class="hint-container details"><summary>git apply -h</summary><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>usage: git apply [&lt;options&gt;] [&lt;patch&gt;...]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    --exclude &lt;path&gt;      don&#39;t apply changes matching the given path</span></span>
<span class="line"><span>    --include &lt;path&gt;      apply changes matching the given path</span></span>
<span class="line"><span>    -p &lt;num&gt;              remove &lt;num&gt; leading slashes from traditional diff paths</span></span>
<span class="line"><span>    --no-add              ignore additions made by the patch</span></span>
<span class="line"><span>    --stat                instead of applying the patch, output diffstat for the input</span></span>
<span class="line"><span>    --numstat             show number of added and deleted lines in decimal notation</span></span>
<span class="line"><span>    --summary             instead of applying the patch, output a summary for the input</span></span>
<span class="line"><span>    --check               instead of applying the patch, see if the patch is applicable</span></span>
<span class="line"><span>    --index               make sure the patch is applicable to the current index</span></span>
<span class="line"><span>    -N, --intent-to-add   mark new files with \`git add --intent-to-add\`</span></span>
<span class="line"><span>    --cached              apply a patch without touching the working tree</span></span>
<span class="line"><span>    --unsafe-paths        accept a patch that touches outside the working area</span></span>
<span class="line"><span>    --apply               also apply the patch (use with --stat/--summary/--check)</span></span>
<span class="line"><span>    -3, --3way            attempt three-way merge, fall back on normal patch if that fails</span></span>
<span class="line"><span>    --build-fake-ancestor &lt;file&gt;</span></span>
<span class="line"><span>                          build a temporary index based on embedded index information</span></span>
<span class="line"><span>    -z                    paths are separated with NUL character</span></span>
<span class="line"><span>    -C &lt;n&gt;                ensure at least &lt;n&gt; lines of context match</span></span>
<span class="line"><span>    --whitespace &lt;action&gt;</span></span>
<span class="line"><span>                          detect new or modified lines that have whitespace errors</span></span>
<span class="line"><span>    --ignore-space-change</span></span>
<span class="line"><span>                          ignore changes in whitespace when finding context</span></span>
<span class="line"><span>    --ignore-whitespace   ignore changes in whitespace when finding context</span></span>
<span class="line"><span>    -R, --reverse         apply the patch in reverse</span></span>
<span class="line"><span>    --unidiff-zero        don&#39;t expect at least one line of context</span></span>
<span class="line"><span>    --reject              leave the rejected hunks in corresponding *.rej files</span></span>
<span class="line"><span>    --allow-overlap       allow overlapping hunks</span></span>
<span class="line"><span>    -v, --verbose         be more verbose</span></span>
<span class="line"><span>    -q, --quiet           be more quiet</span></span>
<span class="line"><span>    --inaccurate-eof      tolerate incorrectly detected missing new-line at the end of file</span></span>
<span class="line"><span>    --recount             do not trust the line counts in the hunk headers</span></span>
<span class="line"><span>    --directory &lt;root&gt;    prepend &lt;root&gt; to all filenames</span></span>
<span class="line"><span>    --allow-empty         don&#39;t return error for empty patches</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="branch" tabindex="-1"><a class="header-anchor" href="#branch"><span>branch</span></a></h2><details class="hint-container details"><summary>git branch -h</summary><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>usage: git branch [&lt;options&gt;] [-r | -a] [--merged] [--no-merged]</span></span>
<span class="line"><span>   or: git branch [&lt;options&gt;] [-f] [--recurse-submodules] &lt;branch-name&gt; [&lt;start-point&gt;]</span></span>
<span class="line"><span>   or: git branch [&lt;options&gt;] [-l] [&lt;pattern&gt;...]</span></span>
<span class="line"><span>   or: git branch [&lt;options&gt;] [-r] (-d | -D) &lt;branch-name&gt;...</span></span>
<span class="line"><span>   or: git branch [&lt;options&gt;] (-m | -M) [&lt;old-branch&gt;] &lt;new-branch&gt;</span></span>
<span class="line"><span>   or: git branch [&lt;options&gt;] (-c | -C) [&lt;old-branch&gt;] &lt;new-branch&gt;</span></span>
<span class="line"><span>   or: git branch [&lt;options&gt;] [-r | -a] [--points-at]</span></span>
<span class="line"><span>   or: git branch [&lt;options&gt;] [-r | -a] [--format]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Generic options</span></span>
<span class="line"><span>    -v, --verbose         show hash and subject, give twice for upstream branch</span></span>
<span class="line"><span>    -q, --quiet           suppress informational messages</span></span>
<span class="line"><span>    -t, --track[=(direct|inherit)]</span></span>
<span class="line"><span>                          set branch tracking configuration</span></span>
<span class="line"><span>    -u, --set-upstream-to &lt;upstream&gt;</span></span>
<span class="line"><span>                          change the upstream info</span></span>
<span class="line"><span>    --unset-upstream      unset the upstream info</span></span>
<span class="line"><span>    --color[=&lt;when&gt;]      use colored output</span></span>
<span class="line"><span>    -r, --remotes         act on remote-tracking branches</span></span>
<span class="line"><span>    --contains &lt;commit&gt;   print only branches that contain the commit</span></span>
<span class="line"><span>    --no-contains &lt;commit&gt;</span></span>
<span class="line"><span>                          print only branches that don&#39;t contain the commit</span></span>
<span class="line"><span>    --abbrev[=&lt;n&gt;]        use &lt;n&gt; digits to display object names</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Specific git-branch actions:</span></span>
<span class="line"><span>    -a, --all             list both remote-tracking and local branches</span></span>
<span class="line"><span>    -d, --delete          delete fully merged branch</span></span>
<span class="line"><span>    -D                    delete branch (even if not merged)</span></span>
<span class="line"><span>    -m, --move            move/rename a branch and its reflog</span></span>
<span class="line"><span>    -M                    move/rename a branch, even if target exists</span></span>
<span class="line"><span>    -c, --copy            copy a branch and its reflog</span></span>
<span class="line"><span>    -C                    copy a branch, even if target exists</span></span>
<span class="line"><span>    -l, --list            list branch names</span></span>
<span class="line"><span>    --show-current        show current branch name</span></span>
<span class="line"><span>    --create-reflog       create the branch&#39;s reflog</span></span>
<span class="line"><span>    --edit-description    edit the description for the branch</span></span>
<span class="line"><span>    -f, --force           force creation, move/rename, deletion</span></span>
<span class="line"><span>    --merged &lt;commit&gt;     print only branches that are merged</span></span>
<span class="line"><span>    --no-merged &lt;commit&gt;  print only branches that are not merged</span></span>
<span class="line"><span>    --column[=&lt;style&gt;]    list branches in columns</span></span>
<span class="line"><span>    --sort &lt;key&gt;          field name to sort on</span></span>
<span class="line"><span>    --points-at &lt;object&gt;  print only branches of the object</span></span>
<span class="line"><span>    -i, --ignore-case     sorting and filtering are case insensitive</span></span>
<span class="line"><span>    --recurse-submodules  recurse through submodules</span></span>
<span class="line"><span>    --format &lt;format&gt;     format to use for the output</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><div class="language-shell" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -M</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dev-branch</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -D</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dev-branch</span></span></code></pre></div><h2 id="checkout" tabindex="-1"><a class="header-anchor" href="#checkout"><span>checkout</span></a></h2><details class="hint-container details"><summary>git checkout -h</summary><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>usage: git checkout [&lt;options&gt;] &lt;branch&gt;</span></span>
<span class="line"><span>   or: git checkout [&lt;options&gt;] [&lt;branch&gt;] -- &lt;file&gt;...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    -b &lt;branch&gt;           create and checkout a new branch</span></span>
<span class="line"><span>    -B &lt;branch&gt;           create/reset and checkout a branch</span></span>
<span class="line"><span>    -l                    create reflog for new branch</span></span>
<span class="line"><span>    --guess               second guess &#39;git checkout &lt;no-such-branch&gt;&#39; (default)</span></span>
<span class="line"><span>    --overlay             use overlay mode (default)</span></span>
<span class="line"><span>    -q, --quiet           suppress progress reporting</span></span>
<span class="line"><span>    --recurse-submodules[=&lt;checkout&gt;]</span></span>
<span class="line"><span>                          control recursive updating of submodules</span></span>
<span class="line"><span>    --progress            force progress reporting</span></span>
<span class="line"><span>    -m, --merge           perform a 3-way merge with the new branch</span></span>
<span class="line"><span>    --conflict &lt;style&gt;    conflict style (merge, diff3, or zdiff3)</span></span>
<span class="line"><span>    -d, --detach          detach HEAD at named commit</span></span>
<span class="line"><span>    -t, --track[=(direct|inherit)]</span></span>
<span class="line"><span>                          set branch tracking configuration</span></span>
<span class="line"><span>    -f, --force           force checkout (throw away local modifications)</span></span>
<span class="line"><span>    --orphan &lt;new-branch&gt;</span></span>
<span class="line"><span>                          new unparented branch</span></span>
<span class="line"><span>    --overwrite-ignore    update ignored files (default)</span></span>
<span class="line"><span>    --ignore-other-worktrees</span></span>
<span class="line"><span>                          do not check if another worktree is holding the given ref</span></span>
<span class="line"><span>    -2, --ours            checkout our version for unmerged files</span></span>
<span class="line"><span>    -3, --theirs          checkout their version for unmerged files</span></span>
<span class="line"><span>    -p, --patch           select hunks interactively</span></span>
<span class="line"><span>    --ignore-skip-worktree-bits</span></span>
<span class="line"><span>                          do not limit pathspecs to sparse entries only</span></span>
<span class="line"><span>    --pathspec-from-file &lt;file&gt;</span></span>
<span class="line"><span>                          read pathspec from file</span></span>
<span class="line"><span>    --pathspec-file-nul   with --pathspec-from-file, pathspec elements are separated with NUL character</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><div class="language-shell" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> checkout</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -b</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dev-branch</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> checkout</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tags/v2.0.0-rc.52</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  -b</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> v2.0.0-rc.52</span></span></code></pre></div><h2 id="cherry-pick" tabindex="-1"><a class="header-anchor" href="#cherry-pick"><span>cherry-pick</span></a></h2><details class="hint-container details"><summary>git cherry-pick -h</summary><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>usage: git cherry-pick [--edit] [-n] [-m &lt;parent-number&gt;] [-s] [-x] [--ff]</span></span>
<span class="line"><span>                       [-S[&lt;keyid&gt;]] &lt;commit&gt;...</span></span>
<span class="line"><span>   or: git cherry-pick (--continue | --skip | --abort | --quit)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    --quit                end revert or cherry-pick sequence</span></span>
<span class="line"><span>    --continue            resume revert or cherry-pick sequence</span></span>
<span class="line"><span>    --abort               cancel revert or cherry-pick sequence</span></span>
<span class="line"><span>    --skip                skip current commit and continue</span></span>
<span class="line"><span>    --cleanup &lt;mode&gt;      how to strip spaces and #comments from message</span></span>
<span class="line"><span>    -n, --no-commit       don&#39;t automatically commit</span></span>
<span class="line"><span>    -e, --edit            edit the commit message</span></span>
<span class="line"><span>    -s, --signoff         add a Signed-off-by trailer</span></span>
<span class="line"><span>    -m, --mainline &lt;parent-number&gt;</span></span>
<span class="line"><span>                          select mainline parent</span></span>
<span class="line"><span>    --rerere-autoupdate   update the index with reused conflict resolution if possible</span></span>
<span class="line"><span>    --strategy &lt;strategy&gt;</span></span>
<span class="line"><span>                          merge strategy</span></span>
<span class="line"><span>    -X, --strategy-option &lt;option&gt;</span></span>
<span class="line"><span>                          option for merge strategy</span></span>
<span class="line"><span>    -S, --gpg-sign[=&lt;key-id&gt;]</span></span>
<span class="line"><span>                          GPG sign commit</span></span>
<span class="line"><span>    -x                    append commit name</span></span>
<span class="line"><span>    --ff                  allow fast-forward</span></span>
<span class="line"><span>    --allow-empty         preserve initially empty commits</span></span>
<span class="line"><span>    --allow-empty-message</span></span>
<span class="line"><span>                          allow commits with empty messages</span></span>
<span class="line"><span>    --keep-redundant-commits</span></span>
<span class="line"><span>                          keep redundant, empty commits</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="clone" tabindex="-1"><a class="header-anchor" href="#clone"><span>clone</span></a></h2><details class="hint-container details"><summary>git clone -h</summary><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>usage: git clone [&lt;options&gt;] [--] &lt;repo&gt; [&lt;dir&gt;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    -v, --verbose         be more verbose</span></span>
<span class="line"><span>    -q, --quiet           be more quiet</span></span>
<span class="line"><span>    --progress            force progress reporting</span></span>
<span class="line"><span>    --reject-shallow      don&#39;t clone shallow repository</span></span>
<span class="line"><span>    -n, --no-checkout     don&#39;t create a checkout</span></span>
<span class="line"><span>    --bare                create a bare repository</span></span>
<span class="line"><span>    --mirror              create a mirror repository (implies bare)</span></span>
<span class="line"><span>    -l, --local           to clone from a local repository</span></span>
<span class="line"><span>    --no-hardlinks        don&#39;t use local hardlinks, always copy</span></span>
<span class="line"><span>    -s, --shared          setup as shared repository</span></span>
<span class="line"><span>    --recurse-submodules[=&lt;pathspec&gt;]</span></span>
<span class="line"><span>                          initialize submodules in the clone</span></span>
<span class="line"><span>    --recursive[=&lt;pathspec&gt;]</span></span>
<span class="line"><span>                          alias of --recurse-submodules</span></span>
<span class="line"><span>    -j, --jobs &lt;n&gt;        number of submodules cloned in parallel</span></span>
<span class="line"><span>    --template &lt;template-directory&gt;</span></span>
<span class="line"><span>                          directory from which templates will be used</span></span>
<span class="line"><span>    --reference &lt;repo&gt;    reference repository</span></span>
<span class="line"><span>    --reference-if-able &lt;repo&gt;</span></span>
<span class="line"><span>                          reference repository</span></span>
<span class="line"><span>    --dissociate          use --reference only while cloning</span></span>
<span class="line"><span>    -o, --origin &lt;name&gt;   use &lt;name&gt; instead of &#39;origin&#39; to track upstream</span></span>
<span class="line"><span>    -b, --branch &lt;branch&gt;</span></span>
<span class="line"><span>                          checkout &lt;branch&gt; instead of the remote&#39;s HEAD</span></span>
<span class="line"><span>    -u, --upload-pack &lt;path&gt;</span></span>
<span class="line"><span>                          path to git-upload-pack on the remote</span></span>
<span class="line"><span>    --depth &lt;depth&gt;       create a shallow clone of that depth</span></span>
<span class="line"><span>    --shallow-since &lt;time&gt;</span></span>
<span class="line"><span>                          create a shallow clone since a specific time</span></span>
<span class="line"><span>    --shallow-exclude &lt;revision&gt;</span></span>
<span class="line"><span>                          deepen history of shallow clone, excluding rev</span></span>
<span class="line"><span>    --single-branch       clone only one branch, HEAD or --branch</span></span>
<span class="line"><span>    --no-tags             don&#39;t clone any tags, and make later fetches not to follow them</span></span>
<span class="line"><span>    --shallow-submodules  any cloned submodules will be shallow</span></span>
<span class="line"><span>    --separate-git-dir &lt;gitdir&gt;</span></span>
<span class="line"><span>                          separate git dir from working tree</span></span>
<span class="line"><span>    -c, --config &lt;key=value&gt;</span></span>
<span class="line"><span>                          set config inside the new repository</span></span>
<span class="line"><span>    --server-option &lt;server-specific&gt;</span></span>
<span class="line"><span>                          option to transmit</span></span>
<span class="line"><span>    -4, --ipv4            use IPv4 addresses only</span></span>
<span class="line"><span>    -6, --ipv6            use IPv6 addresses only</span></span>
<span class="line"><span>    --filter &lt;args&gt;       object filtering</span></span>
<span class="line"><span>    --also-filter-submodules</span></span>
<span class="line"><span>                          apply partial clone filters to submodules</span></span>
<span class="line"><span>    --remote-submodules   any cloned submodules will use their remote-tracking branch</span></span>
<span class="line"><span>    --sparse              initialize sparse-checkout file to include only files at root</span></span>
<span class="line"><span>    --bundle-uri &lt;uri&gt;    a URI for downloading bundles before fetching from origin remote</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="commit" tabindex="-1"><a class="header-anchor" href="#commit"><span>commit</span></a></h2><details class="hint-container details"><summary>git commit -h</summary><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>usage: git commit [-a | --interactive | --patch] [-s] [-v] [-u&lt;mode&gt;] [--amend]</span></span>
<span class="line"><span>                  [--dry-run] [(-c | -C | --squash) &lt;commit&gt; | --fixup [(amend|reword):]&lt;commit&gt;)]</span></span>
<span class="line"><span>                  [-F &lt;file&gt; | -m &lt;msg&gt;] [--reset-author] [--allow-empty]</span></span>
<span class="line"><span>                  [--allow-empty-message] [--no-verify] [-e] [--author=&lt;author&gt;]</span></span>
<span class="line"><span>                  [--date=&lt;date&gt;] [--cleanup=&lt;mode&gt;] [--[no-]status]</span></span>
<span class="line"><span>                  [-i | -o] [--pathspec-from-file=&lt;file&gt; [--pathspec-file-nul]]</span></span>
<span class="line"><span>                  [(--trailer &lt;token&gt;[(=|:)&lt;value&gt;])...] [-S[&lt;keyid&gt;]]</span></span>
<span class="line"><span>                  [--] [&lt;pathspec&gt;...]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    -q, --quiet           suppress summary after successful commit</span></span>
<span class="line"><span>    -v, --verbose         show diff in commit message template</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Commit message options</span></span>
<span class="line"><span>    -F, --file &lt;file&gt;     read message from file</span></span>
<span class="line"><span>    --author &lt;author&gt;     override author for commit</span></span>
<span class="line"><span>    --date &lt;date&gt;         override date for commit</span></span>
<span class="line"><span>    -m, --message &lt;message&gt;</span></span>
<span class="line"><span>                          commit message</span></span>
<span class="line"><span>    -c, --reedit-message &lt;commit&gt;</span></span>
<span class="line"><span>                          reuse and edit message from specified commit</span></span>
<span class="line"><span>    -C, --reuse-message &lt;commit&gt;</span></span>
<span class="line"><span>                          reuse message from specified commit</span></span>
<span class="line"><span>    --fixup [(amend|reword):]commit</span></span>
<span class="line"><span>                          use autosquash formatted message to fixup or amend/reword specified commit</span></span>
<span class="line"><span>    --squash &lt;commit&gt;     use autosquash formatted message to squash specified commit</span></span>
<span class="line"><span>    --reset-author        the commit is authored by me now (used with -C/-c/--amend)</span></span>
<span class="line"><span>    --trailer &lt;trailer&gt;   add custom trailer(s)</span></span>
<span class="line"><span>    -s, --signoff         add a Signed-off-by trailer</span></span>
<span class="line"><span>    -t, --template &lt;file&gt;</span></span>
<span class="line"><span>                          use specified template file</span></span>
<span class="line"><span>    -e, --edit            force edit of commit</span></span>
<span class="line"><span>    --cleanup &lt;mode&gt;      how to strip spaces and #comments from message</span></span>
<span class="line"><span>    --status              include status in commit message template</span></span>
<span class="line"><span>    -S, --gpg-sign[=&lt;key-id&gt;]</span></span>
<span class="line"><span>                          GPG sign commit</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Commit contents options</span></span>
<span class="line"><span>    -a, --all             commit all changed files</span></span>
<span class="line"><span>    -i, --include         add specified files to index for commit</span></span>
<span class="line"><span>    --interactive         interactively add files</span></span>
<span class="line"><span>    -p, --patch           interactively add changes</span></span>
<span class="line"><span>    -o, --only            commit only specified files</span></span>
<span class="line"><span>    -n, --no-verify       bypass pre-commit and commit-msg hooks</span></span>
<span class="line"><span>    --dry-run             show what would be committed</span></span>
<span class="line"><span>    --short               show status concisely</span></span>
<span class="line"><span>    --branch              show branch information</span></span>
<span class="line"><span>    --ahead-behind        compute full ahead/behind values</span></span>
<span class="line"><span>    --porcelain           machine-readable output</span></span>
<span class="line"><span>    --long                show status in long format (default)</span></span>
<span class="line"><span>    -z, --null            terminate entries with NUL</span></span>
<span class="line"><span>    --amend               amend previous commit</span></span>
<span class="line"><span>    --no-post-rewrite     bypass post-rewrite hook</span></span>
<span class="line"><span>    -u, --untracked-files[=&lt;mode&gt;]</span></span>
<span class="line"><span>                          show untracked files, optional modes: all, normal, no. (Default: all)</span></span>
<span class="line"><span>    --pathspec-from-file &lt;file&gt;</span></span>
<span class="line"><span>                          read pathspec from file</span></span>
<span class="line"><span>    --pathspec-file-nul   with --pathspec-from-file, pathspec elements are separated with NUL character</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><div class="language-shell" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> commit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;commit message&#39;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> commit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --amend</span></span></code></pre></div><h2 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>config</span></a></h2><details class="hint-container details"><summary>git config -h</summary><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>usage: git config [&lt;options&gt;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Config file location</span></span>
<span class="line"><span>    --global              use global config file</span></span>
<span class="line"><span>    --system              use system config file</span></span>
<span class="line"><span>    --local               use repository config file</span></span>
<span class="line"><span>    --worktree            use per-worktree config file</span></span>
<span class="line"><span>    -f, --file &lt;file&gt;     use given config file</span></span>
<span class="line"><span>    --blob &lt;blob-id&gt;      read config from given blob object</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Action</span></span>
<span class="line"><span>    --get                 get value: name [value-pattern]</span></span>
<span class="line"><span>    --get-all             get all values: key [value-pattern]</span></span>
<span class="line"><span>    --get-regexp          get values for regexp: name-regex [value-pattern]</span></span>
<span class="line"><span>    --get-urlmatch        get value specific for the URL: section[.var] URL</span></span>
<span class="line"><span>    --replace-all         replace all matching variables: name value [value-pattern]</span></span>
<span class="line"><span>    --add                 add a new variable: name value</span></span>
<span class="line"><span>    --unset               remove a variable: name [value-pattern]</span></span>
<span class="line"><span>    --unset-all           remove all matches: name [value-pattern]</span></span>
<span class="line"><span>    --rename-section      rename section: old-name new-name</span></span>
<span class="line"><span>    --remove-section      remove a section: name</span></span>
<span class="line"><span>    -l, --list            list all</span></span>
<span class="line"><span>    --fixed-value         use string equality when comparing values to &#39;value-pattern&#39;</span></span>
<span class="line"><span>    -e, --edit            open an editor</span></span>
<span class="line"><span>    --get-color           find the color configured: slot [default]</span></span>
<span class="line"><span>    --get-colorbool       find the color setting: slot [stdout-is-tty]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Type</span></span>
<span class="line"><span>    -t, --type &lt;type&gt;     value is given this type</span></span>
<span class="line"><span>    --bool                value is &quot;true&quot; or &quot;false&quot;</span></span>
<span class="line"><span>    --int                 value is decimal number</span></span>
<span class="line"><span>    --bool-or-int         value is --bool or --int</span></span>
<span class="line"><span>    --bool-or-str         value is --bool or string</span></span>
<span class="line"><span>    --path                value is a path (file or directory name)</span></span>
<span class="line"><span>    --expiry-date         value is an expiry date</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Other</span></span>
<span class="line"><span>    -z, --null            terminate values with NUL byte</span></span>
<span class="line"><span>    --name-only           show variable names only</span></span>
<span class="line"><span>    --includes            respect include directives on lookup</span></span>
<span class="line"><span>    --show-origin         show origin of config (file, standard input, blob, command line)</span></span>
<span class="line"><span>    --show-scope          show scope of config (worktree, local, global, system, command)</span></span>
<span class="line"><span>    --default &lt;value&gt;     with --get, use default value when missing entry</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="fetch" tabindex="-1"><a class="header-anchor" href="#fetch"><span>fetch</span></a></h2><details class="hint-container details"><summary>git fetch -h</summary><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>usage: git fetch [&lt;options&gt;] [&lt;repository&gt; [&lt;refspec&gt;...]]</span></span>
<span class="line"><span>   or: git fetch [&lt;options&gt;] &lt;group&gt;</span></span>
<span class="line"><span>   or: git fetch --multiple [&lt;options&gt;] [(&lt;repository&gt; | &lt;group&gt;)...]</span></span>
<span class="line"><span>   or: git fetch --all [&lt;options&gt;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    -v, --verbose         be more verbose</span></span>
<span class="line"><span>    -q, --quiet           be more quiet</span></span>
<span class="line"><span>    --all                 fetch from all remotes</span></span>
<span class="line"><span>    --set-upstream        set upstream for git pull/fetch</span></span>
<span class="line"><span>    -a, --append          append to .git/FETCH_HEAD instead of overwriting</span></span>
<span class="line"><span>    --atomic              use atomic transaction to update references</span></span>
<span class="line"><span>    --upload-pack &lt;path&gt;  path to upload pack on remote end</span></span>
<span class="line"><span>    -f, --force           force overwrite of local reference</span></span>
<span class="line"><span>    -m, --multiple        fetch from multiple remotes</span></span>
<span class="line"><span>    -t, --tags            fetch all tags and associated objects</span></span>
<span class="line"><span>    -n                    do not fetch all tags (--no-tags)</span></span>
<span class="line"><span>    -j, --jobs &lt;n&gt;        number of submodules fetched in parallel</span></span>
<span class="line"><span>    --prefetch            modify the refspec to place all refs within refs/prefetch/</span></span>
<span class="line"><span>    -p, --prune           prune remote-tracking branches no longer on remote</span></span>
<span class="line"><span>    -P, --prune-tags      prune local tags no longer on remote and clobber changed tags</span></span>
<span class="line"><span>    --recurse-submodules[=&lt;on-demand&gt;]</span></span>
<span class="line"><span>                          control recursive fetching of submodules</span></span>
<span class="line"><span>    --dry-run             dry run</span></span>
<span class="line"><span>    --write-fetch-head    write fetched references to the FETCH_HEAD file</span></span>
<span class="line"><span>    -k, --keep            keep downloaded pack</span></span>
<span class="line"><span>    -u, --update-head-ok  allow updating of HEAD ref</span></span>
<span class="line"><span>    --progress            force progress reporting</span></span>
<span class="line"><span>    --depth &lt;depth&gt;       deepen history of shallow clone</span></span>
<span class="line"><span>    --shallow-since &lt;time&gt;</span></span>
<span class="line"><span>                          deepen history of shallow repository based on time</span></span>
<span class="line"><span>    --shallow-exclude &lt;revision&gt;</span></span>
<span class="line"><span>                          deepen history of shallow clone, excluding rev</span></span>
<span class="line"><span>    --deepen &lt;n&gt;          deepen history of shallow clone</span></span>
<span class="line"><span>    --unshallow           convert to a complete repository</span></span>
<span class="line"><span>    --refetch             re-fetch without negotiating common commits</span></span>
<span class="line"><span>    --update-shallow      accept refs that update .git/shallow</span></span>
<span class="line"><span>    --refmap &lt;refmap&gt;     specify fetch refmap</span></span>
<span class="line"><span>    -o, --server-option &lt;server-specific&gt;</span></span>
<span class="line"><span>                          option to transmit</span></span>
<span class="line"><span>    -4, --ipv4            use IPv4 addresses only</span></span>
<span class="line"><span>    -6, --ipv6            use IPv6 addresses only</span></span>
<span class="line"><span>    --negotiation-tip &lt;revision&gt;</span></span>
<span class="line"><span>                          report that we have only objects reachable from this object</span></span>
<span class="line"><span>    --negotiate-only      do not fetch a packfile; instead, print ancestors of negotiation tips</span></span>
<span class="line"><span>    --filter &lt;args&gt;       object filtering</span></span>
<span class="line"><span>    --auto-maintenance    run &#39;maintenance --auto&#39; after fetching</span></span>
<span class="line"><span>    --auto-gc             run &#39;maintenance --auto&#39; after fetching</span></span>
<span class="line"><span>    --show-forced-updates</span></span>
<span class="line"><span>                          check for forced-updates on all updated branches</span></span>
<span class="line"><span>    --write-commit-graph  write the commit-graph after fetching</span></span>
<span class="line"><span>    --stdin               accept refspecs from stdin</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="format-patch" tabindex="-1"><a class="header-anchor" href="#format-patch"><span>format-patch</span></a></h2><details class="hint-container details"><summary>git format-patch -h</summary><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>usage: git format-patch [&lt;options&gt;] [&lt;since&gt; | &lt;revision-range&gt;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    -n, --numbered        use [PATCH n/m] even with a single patch</span></span>
<span class="line"><span>    -N, --no-numbered     use [PATCH] even with multiple patches</span></span>
<span class="line"><span>    -s, --signoff         add a Signed-off-by trailer</span></span>
<span class="line"><span>    --stdout              print patches to standard out</span></span>
<span class="line"><span>    --cover-letter        generate a cover letter</span></span>
<span class="line"><span>    --numbered-files      use simple number sequence for output file names</span></span>
<span class="line"><span>    --suffix &lt;sfx&gt;        use &lt;sfx&gt; instead of &#39;.patch&#39;</span></span>
<span class="line"><span>    --start-number &lt;n&gt;    start numbering patches at &lt;n&gt; instead of 1</span></span>
<span class="line"><span>    -v, --reroll-count &lt;reroll-count&gt;</span></span>
<span class="line"><span>                          mark the series as Nth re-roll</span></span>
<span class="line"><span>    --filename-max-length &lt;n&gt;</span></span>
<span class="line"><span>                          max length of output filename</span></span>
<span class="line"><span>    --rfc                 use [RFC PATCH] instead of [PATCH]</span></span>
<span class="line"><span>    --cover-from-description &lt;cover-from-description-mode&gt;</span></span>
<span class="line"><span>                          generate parts of a cover letter based on a branch&#39;s description</span></span>
<span class="line"><span>    --subject-prefix &lt;prefix&gt;</span></span>
<span class="line"><span>                          use [&lt;prefix&gt;] instead of [PATCH]</span></span>
<span class="line"><span>    -o, --output-directory &lt;dir&gt;</span></span>
<span class="line"><span>                          store resulting files in &lt;dir&gt;</span></span>
<span class="line"><span>    -k, --keep-subject    don&#39;t strip/add [PATCH]</span></span>
<span class="line"><span>    --no-binary           don&#39;t output binary diffs</span></span>
<span class="line"><span>    --zero-commit         output all-zero hash in From header</span></span>
<span class="line"><span>    --ignore-if-in-upstream</span></span>
<span class="line"><span>                          don&#39;t include a patch matching a commit upstream</span></span>
<span class="line"><span>    -p, --no-stat         show patch format instead of default (patch + stat)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Messaging</span></span>
<span class="line"><span>    --add-header &lt;header&gt;</span></span>
<span class="line"><span>                          add email header</span></span>
<span class="line"><span>    --to &lt;email&gt;          add To: header</span></span>
<span class="line"><span>    --cc &lt;email&gt;          add Cc: header</span></span>
<span class="line"><span>    --from[=&lt;ident&gt;]      set From address to &lt;ident&gt; (or committer ident if absent)</span></span>
<span class="line"><span>    --in-reply-to &lt;message-id&gt;</span></span>
<span class="line"><span>                          make first mail a reply to &lt;message-id&gt;</span></span>
<span class="line"><span>    --attach[=&lt;boundary&gt;]</span></span>
<span class="line"><span>                          attach the patch</span></span>
<span class="line"><span>    --inline[=&lt;boundary&gt;]</span></span>
<span class="line"><span>                          inline the patch</span></span>
<span class="line"><span>    --thread[=&lt;style&gt;]    enable message threading, styles: shallow, deep</span></span>
<span class="line"><span>    --signature &lt;signature&gt;</span></span>
<span class="line"><span>                          add a signature</span></span>
<span class="line"><span>    --base &lt;base-commit&gt;  add prerequisite tree info to the patch series</span></span>
<span class="line"><span>    --signature-file &lt;file&gt;</span></span>
<span class="line"><span>                          add a signature from a file</span></span>
<span class="line"><span>    -q, --quiet           don&#39;t print the patch filenames</span></span>
<span class="line"><span>    --progress            show progress while generating patches</span></span>
<span class="line"><span>    --interdiff &lt;rev&gt;     show changes against &lt;rev&gt; in cover letter or single patch</span></span>
<span class="line"><span>    --range-diff &lt;refspec&gt;</span></span>
<span class="line"><span>                          show changes against &lt;refspec&gt; in cover letter or single patch</span></span>
<span class="line"><span>    --creation-factor &lt;n&gt;</span></span>
<span class="line"><span>                          percentage by which creation is weighted</span></span>
<span class="line"><span>    --force-in-body-from  show in-body From: even if identical to the e-mail header</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="init" tabindex="-1"><a class="header-anchor" href="#init"><span>init</span></a></h2><details class="hint-container details"><summary>git init -h</summary><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>usage: git init [-q | --quiet] [--bare] [--template=&lt;template-directory&gt;]</span></span>
<span class="line"><span>                [--separate-git-dir &lt;git-dir&gt;] [--object-format=&lt;format&gt;]</span></span>
<span class="line"><span>                [-b &lt;branch-name&gt; | --initial-branch=&lt;branch-name&gt;]</span></span>
<span class="line"><span>                [--shared[=&lt;permissions&gt;]] [&lt;directory&gt;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    --template &lt;template-directory&gt;</span></span>
<span class="line"><span>                          directory from which templates will be used</span></span>
<span class="line"><span>    --bare                create a bare repository</span></span>
<span class="line"><span>    --shared[=&lt;permissions&gt;]</span></span>
<span class="line"><span>                          specify that the git repository is to be shared amongst several users</span></span>
<span class="line"><span>    -q, --quiet           be quiet</span></span>
<span class="line"><span>    --separate-git-dir &lt;gitdir&gt;</span></span>
<span class="line"><span>                          separate git dir from working tree</span></span>
<span class="line"><span>    -b, --initial-branch &lt;name&gt;</span></span>
<span class="line"><span>                          override the name of the initial branch</span></span>
<span class="line"><span>    --object-format &lt;hash&gt;</span></span>
<span class="line"><span>                          specify the hash algorithm to use</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="log" tabindex="-1"><a class="header-anchor" href="#log"><span>log</span></a></h2><details class="hint-container details"><summary>git log -h</summary><div class="language-" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>usage: git log [&lt;options&gt;] [&lt;revision-range&gt;] [[--] &lt;path&gt;...]</span></span>
<span class="line"><span>   or: git show [&lt;options&gt;] &lt;object&gt;...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    -q, --quiet           suppress diff output</span></span>
<span class="line"><span>    --source              show source</span></span>
<span class="line"><span>    --use-mailmap         use mail map file</span></span>
<span class="line"><span>    --mailmap             alias of --use-mailmap</span></span>
<span class="line"><span>    --clear-decorations   clear all previously-defined decoration filters</span></span>
<span class="line"><span>    --decorate-refs &lt;pattern&gt;</span></span>
<span class="line"><span>                          only decorate refs that match &lt;pattern&gt;</span></span>
<span class="line"><span>    --decorate-refs-exclude &lt;pattern&gt;</span></span>
<span class="line"><span>                          do not decorate refs that match &lt;pattern&gt;</span></span>
<span class="line"><span>    --decorate[=...]      decorate options</span></span>
<span class="line"><span>    -L &lt;range:file&gt;       trace the evolution of line range &lt;start&gt;,&lt;end&gt; or function :&lt;funcname&gt; in &lt;file&gt;</span></span></code></pre></div></details><h2 id="merge" tabindex="-1"><a class="header-anchor" href="#merge"><span>merge</span></a></h2><details class="hint-container details"><summary>git merge -h</summary><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>usage: git merge [&lt;options&gt;] [&lt;commit&gt;...]</span></span>
<span class="line"><span>   or: git merge --abort</span></span>
<span class="line"><span>   or: git merge --continue</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    -n                    do not show a diffstat at the end of the merge</span></span>
<span class="line"><span>    --stat                show a diffstat at the end of the merge</span></span>
<span class="line"><span>    --summary             (synonym to --stat)</span></span>
<span class="line"><span>    --log[=&lt;n&gt;]           add (at most &lt;n&gt;) entries from shortlog to merge commit message</span></span>
<span class="line"><span>    --squash              create a single commit instead of doing a merge</span></span>
<span class="line"><span>    --commit              perform a commit if the merge succeeds (default)</span></span>
<span class="line"><span>    -e, --edit            edit message before committing</span></span>
<span class="line"><span>    --cleanup &lt;mode&gt;      how to strip spaces and #comments from message</span></span>
<span class="line"><span>    --ff                  allow fast-forward (default)</span></span>
<span class="line"><span>    --ff-only             abort if fast-forward is not possible</span></span>
<span class="line"><span>    --rerere-autoupdate   update the index with reused conflict resolution if possible</span></span>
<span class="line"><span>    --verify-signatures   verify that the named commit has a valid GPG signature</span></span>
<span class="line"><span>    -s, --strategy &lt;strategy&gt;</span></span>
<span class="line"><span>                          merge strategy to use</span></span>
<span class="line"><span>    -X, --strategy-option &lt;option=value&gt;</span></span>
<span class="line"><span>                          option for selected merge strategy</span></span>
<span class="line"><span>    -m, --message &lt;message&gt;</span></span>
<span class="line"><span>                          merge commit message (for a non-fast-forward merge)</span></span>
<span class="line"><span>    -F, --file &lt;path&gt;     read message from file</span></span>
<span class="line"><span>    --into-name &lt;name&gt;    use &lt;name&gt; instead of the real target</span></span>
<span class="line"><span>    -v, --verbose         be more verbose</span></span>
<span class="line"><span>    -q, --quiet           be more quiet</span></span>
<span class="line"><span>    --abort               abort the current in-progress merge</span></span>
<span class="line"><span>    --quit                --abort but leave index and working tree alone</span></span>
<span class="line"><span>    --continue            continue the current in-progress merge</span></span>
<span class="line"><span>    --allow-unrelated-histories</span></span>
<span class="line"><span>                          allow merging unrelated histories</span></span>
<span class="line"><span>    --progress            force progress reporting</span></span>
<span class="line"><span>    -S, --gpg-sign[=&lt;key-id&gt;]</span></span>
<span class="line"><span>                          GPG sign commit</span></span>
<span class="line"><span>    --autostash           automatically stash/stash pop before and after</span></span>
<span class="line"><span>    --overwrite-ignore    update ignored files (default)</span></span>
<span class="line"><span>    --signoff             add a Signed-off-by trailer</span></span>
<span class="line"><span>    --no-verify           bypass pre-merge-commit and commit-msg hooks</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="pull" tabindex="-1"><a class="header-anchor" href="#pull"><span>pull</span></a></h2><details class="hint-container details"><summary>git pull -h</summary><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>usage: git pull [&lt;options&gt;] [&lt;repository&gt; [&lt;refspec&gt;...]]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    -v, --verbose         be more verbose</span></span>
<span class="line"><span>    -q, --quiet           be more quiet</span></span>
<span class="line"><span>    --progress            force progress reporting</span></span>
<span class="line"><span>    --recurse-submodules[=&lt;on-demand&gt;]</span></span>
<span class="line"><span>                          control for recursive fetching of submodules</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Options related to merging</span></span>
<span class="line"><span>    -r, --rebase[=(false|true|merges|interactive)]</span></span>
<span class="line"><span>                          incorporate changes by rebasing rather than merging</span></span>
<span class="line"><span>    -n                    do not show a diffstat at the end of the merge</span></span>
<span class="line"><span>    --stat                show a diffstat at the end of the merge</span></span>
<span class="line"><span>    --log[=&lt;n&gt;]           add (at most &lt;n&gt;) entries from shortlog to merge commit message</span></span>
<span class="line"><span>    --signoff[=...]       add a Signed-off-by trailer</span></span>
<span class="line"><span>    --squash              create a single commit instead of doing a merge</span></span>
<span class="line"><span>    --commit              perform a commit if the merge succeeds (default)</span></span>
<span class="line"><span>    --edit                edit message before committing</span></span>
<span class="line"><span>    --cleanup &lt;mode&gt;      how to strip spaces and #comments from message</span></span>
<span class="line"><span>    --ff                  allow fast-forward</span></span>
<span class="line"><span>    --ff-only             abort if fast-forward is not possible</span></span>
<span class="line"><span>    --verify              control use of pre-merge-commit and commit-msg hooks</span></span>
<span class="line"><span>    --verify-signatures   verify that the named commit has a valid GPG signature</span></span>
<span class="line"><span>    --autostash           automatically stash/stash pop before and after</span></span>
<span class="line"><span>    -s, --strategy &lt;strategy&gt;</span></span>
<span class="line"><span>                          merge strategy to use</span></span>
<span class="line"><span>    -X, --strategy-option &lt;option=value&gt;</span></span>
<span class="line"><span>                          option for selected merge strategy</span></span>
<span class="line"><span>    -S, --gpg-sign[=&lt;key-id&gt;]</span></span>
<span class="line"><span>                          GPG sign commit</span></span>
<span class="line"><span>    --allow-unrelated-histories</span></span>
<span class="line"><span>                          allow merging unrelated histories</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Options related to fetching</span></span>
<span class="line"><span>    --all                 fetch from all remotes</span></span>
<span class="line"><span>    -a, --append          append to .git/FETCH_HEAD instead of overwriting</span></span>
<span class="line"><span>    --upload-pack &lt;path&gt;  path to upload pack on remote end</span></span>
<span class="line"><span>    -f, --force           force overwrite of local branch</span></span>
<span class="line"><span>    -t, --tags            fetch all tags and associated objects</span></span>
<span class="line"><span>    -p, --prune           prune remote-tracking branches no longer on remote</span></span>
<span class="line"><span>    -j, --jobs[=&lt;n&gt;]      number of submodules pulled in parallel</span></span>
<span class="line"><span>    --dry-run             dry run</span></span>
<span class="line"><span>    -k, --keep            keep downloaded pack</span></span>
<span class="line"><span>    --depth &lt;depth&gt;       deepen history of shallow clone</span></span>
<span class="line"><span>    --shallow-since &lt;time&gt;</span></span>
<span class="line"><span>                          deepen history of shallow repository based on time</span></span>
<span class="line"><span>    --shallow-exclude &lt;revision&gt;</span></span>
<span class="line"><span>                          deepen history of shallow clone, excluding rev</span></span>
<span class="line"><span>    --deepen &lt;n&gt;          deepen history of shallow clone</span></span>
<span class="line"><span>    --unshallow           convert to a complete repository</span></span>
<span class="line"><span>    --update-shallow      accept refs that update .git/shallow</span></span>
<span class="line"><span>    --refmap &lt;refmap&gt;     specify fetch refmap</span></span>
<span class="line"><span>    -o, --server-option &lt;server-specific&gt;</span></span>
<span class="line"><span>                          option to transmit</span></span>
<span class="line"><span>    -4, --ipv4            use IPv4 addresses only</span></span>
<span class="line"><span>    -6, --ipv6            use IPv6 addresses only</span></span>
<span class="line"><span>    --negotiation-tip &lt;revision&gt;</span></span>
<span class="line"><span>                          report that we have only objects reachable from this object</span></span>
<span class="line"><span>    --show-forced-updates</span></span>
<span class="line"><span>                          check for forced-updates on all updated branches</span></span>
<span class="line"><span>    --set-upstream        set upstream for git pull/fetch</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="push" tabindex="-1"><a class="header-anchor" href="#push"><span>push</span></a></h2><details class="hint-container details"><summary>git push -h</summary><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>usage: git push [&lt;options&gt;] [&lt;repository&gt; [&lt;refspec&gt;...]]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    -v, --verbose         be more verbose</span></span>
<span class="line"><span>    -q, --quiet           be more quiet</span></span>
<span class="line"><span>    --repo &lt;repository&gt;   repository</span></span>
<span class="line"><span>    --all                 push all refs</span></span>
<span class="line"><span>    --mirror              mirror all refs</span></span>
<span class="line"><span>    -d, --delete          delete refs</span></span>
<span class="line"><span>    --tags                push tags (can&#39;t be used with --all or --mirror)</span></span>
<span class="line"><span>    -n, --dry-run         dry run</span></span>
<span class="line"><span>    --porcelain           machine-readable output</span></span>
<span class="line"><span>    -f, --force           force updates</span></span>
<span class="line"><span>    --force-with-lease[=&lt;refname&gt;:&lt;expect&gt;]</span></span>
<span class="line"><span>                          require old value of ref to be at this value</span></span>
<span class="line"><span>    --force-if-includes   require remote updates to be integrated locally</span></span>
<span class="line"><span>    --recurse-submodules (check|on-demand|no)</span></span>
<span class="line"><span>                          control recursive pushing of submodules</span></span>
<span class="line"><span>    --thin                use thin pack</span></span>
<span class="line"><span>    --receive-pack &lt;receive-pack&gt;</span></span>
<span class="line"><span>                          receive pack program</span></span>
<span class="line"><span>    --exec &lt;receive-pack&gt;</span></span>
<span class="line"><span>                          receive pack program</span></span>
<span class="line"><span>    -u, --set-upstream    set upstream for git pull/status</span></span>
<span class="line"><span>    --progress            force progress reporting</span></span>
<span class="line"><span>    --prune               prune locally removed refs</span></span>
<span class="line"><span>    --no-verify           bypass pre-push hook</span></span>
<span class="line"><span>    --follow-tags         push missing but relevant tags</span></span>
<span class="line"><span>    --signed[=(yes|no|if-asked)]</span></span>
<span class="line"><span>                          GPG sign the push</span></span>
<span class="line"><span>    --atomic              request atomic transaction on remote side</span></span>
<span class="line"><span>    -o, --push-option &lt;server-specific&gt;</span></span>
<span class="line"><span>                          option to transmit</span></span>
<span class="line"><span>    -4, --ipv4            use IPv4 addresses only</span></span>
<span class="line"><span>    -6, --ipv6            use IPv6 addresses only</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="rebase" tabindex="-1"><a class="header-anchor" href="#rebase"><span>rebase</span></a></h2><details class="hint-container details"><summary>git rebase -h</summary><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>usage: git rebase [-i] [options] [--exec &lt;cmd&gt;] [--onto &lt;newbase&gt; | --keep-base] [&lt;upstream&gt; [&lt;branch&gt;]]</span></span>
<span class="line"><span>   or: git rebase [-i] [options] [--exec &lt;cmd&gt;] [--onto &lt;newbase&gt;] --root [&lt;branch&gt;]</span></span>
<span class="line"><span>   or: git rebase --continue | --abort | --skip | --edit-todo</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    --onto &lt;revision&gt;     rebase onto given branch instead of upstream</span></span>
<span class="line"><span>    --keep-base           use the merge-base of upstream and branch as the current base</span></span>
<span class="line"><span>    --no-verify           allow pre-rebase hook to run</span></span>
<span class="line"><span>    -q, --quiet           be quiet. implies --no-stat</span></span>
<span class="line"><span>    -v, --verbose         display a diffstat of what changed upstream</span></span>
<span class="line"><span>    -n, --no-stat         do not show diffstat of what changed upstream</span></span>
<span class="line"><span>    --signoff             add a Signed-off-by trailer to each commit</span></span>
<span class="line"><span>    --committer-date-is-author-date</span></span>
<span class="line"><span>                          make committer date match author date</span></span>
<span class="line"><span>    --reset-author-date   ignore author date and use current date</span></span>
<span class="line"><span>    -C &lt;n&gt;                passed to &#39;git apply&#39;</span></span>
<span class="line"><span>    --ignore-whitespace   ignore changes in whitespace</span></span>
<span class="line"><span>    --whitespace &lt;action&gt;</span></span>
<span class="line"><span>                          passed to &#39;git apply&#39;</span></span>
<span class="line"><span>    -f, --force-rebase    cherry-pick all commits, even if unchanged</span></span>
<span class="line"><span>    --no-ff               cherry-pick all commits, even if unchanged</span></span>
<span class="line"><span>    --continue            continue</span></span>
<span class="line"><span>    --skip                skip current patch and continue</span></span>
<span class="line"><span>    --abort               abort and check out the original branch</span></span>
<span class="line"><span>    --quit                abort but keep HEAD where it is</span></span>
<span class="line"><span>    --edit-todo           edit the todo list during an interactive rebase</span></span>
<span class="line"><span>    --show-current-patch  show the patch file being applied or merged</span></span>
<span class="line"><span>    --apply               use apply strategies to rebase</span></span>
<span class="line"><span>    -m, --merge           use merging strategies to rebase</span></span>
<span class="line"><span>    -i, --interactive     let the user edit the list of commits to rebase</span></span>
<span class="line"><span>    --rerere-autoupdate   update the index with reused conflict resolution if possible</span></span>
<span class="line"><span>    --empty &lt;{drop,keep,ask}&gt;</span></span>
<span class="line"><span>                          how to handle commits that become empty</span></span>
<span class="line"><span>    --autosquash          move commits that begin with squash!/fixup! under -i</span></span>
<span class="line"><span>    --update-refs         update branches that point to commits that are being rebased</span></span>
<span class="line"><span>    -S, --gpg-sign[=&lt;key-id&gt;]</span></span>
<span class="line"><span>                          GPG-sign commits</span></span>
<span class="line"><span>    --autostash           automatically stash/stash pop before and after</span></span>
<span class="line"><span>    -x, --exec &lt;exec&gt;     add exec lines after each commit of the editable list</span></span>
<span class="line"><span>    -r, --rebase-merges[=&lt;mode&gt;]</span></span>
<span class="line"><span>                          try to rebase merges instead of skipping them</span></span>
<span class="line"><span>    --fork-point          use &#39;merge-base --fork-point&#39; to refine upstream</span></span>
<span class="line"><span>    -s, --strategy &lt;strategy&gt;</span></span>
<span class="line"><span>                          use the given merge strategy</span></span>
<span class="line"><span>    -X, --strategy-option &lt;option&gt;</span></span>
<span class="line"><span>                          pass the argument through to the merge strategy</span></span>
<span class="line"><span>    --root                rebase all reachable commits up to the root(s)</span></span>
<span class="line"><span>    --reschedule-failed-exec</span></span>
<span class="line"><span>                          automatically re-schedule any \`exec\` that fails</span></span>
<span class="line"><span>    --reapply-cherry-picks</span></span>
<span class="line"><span>                          apply all changes, even those already present upstream</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="reset" tabindex="-1"><a class="header-anchor" href="#reset"><span>reset</span></a></h2><details class="hint-container details"><summary>git reset -h</summary><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>usage: git reset [--mixed | --soft | --hard | --merge | --keep] [-q] [&lt;commit&gt;]</span></span>
<span class="line"><span>   or: git reset [-q] [&lt;tree-ish&gt;] [--] &lt;pathspec&gt;...</span></span>
<span class="line"><span>   or: git reset [-q] [--pathspec-from-file [--pathspec-file-nul]] [&lt;tree-ish&gt;]</span></span>
<span class="line"><span>   or: git reset --patch [&lt;tree-ish&gt;] [--] [&lt;pathspec&gt;...]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    -q, --quiet           be quiet, only report errors</span></span>
<span class="line"><span>    --no-refresh          skip refreshing the index after reset</span></span>
<span class="line"><span>    --mixed               reset HEAD and index</span></span>
<span class="line"><span>    --soft                reset only HEAD</span></span>
<span class="line"><span>    --hard                reset HEAD, index and working tree</span></span>
<span class="line"><span>    --merge               reset HEAD, index and working tree</span></span>
<span class="line"><span>    --keep                reset HEAD but keep local changes</span></span>
<span class="line"><span>    --recurse-submodules[=&lt;reset&gt;]</span></span>
<span class="line"><span>                          control recursive updating of submodules</span></span>
<span class="line"><span>    -p, --patch           select hunks interactively</span></span>
<span class="line"><span>    -N, --intent-to-add   record only the fact that removed paths will be added later</span></span>
<span class="line"><span>    --pathspec-from-file &lt;file&gt;</span></span>
<span class="line"><span>                          read pathspec from file</span></span>
<span class="line"><span>    --pathspec-file-nul   with --pathspec-from-file, pathspec elements are separated with NUL character</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="revert" tabindex="-1"><a class="header-anchor" href="#revert"><span>revert</span></a></h2><details class="hint-container details"><summary>git revert -h</summary><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>usage: git revert [--[no-]edit] [-n] [-m &lt;parent-number&gt;] [-s] [-S[&lt;keyid&gt;]] &lt;commit&gt;...</span></span>
<span class="line"><span>   or: git revert (--continue | --skip | --abort | --quit)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    --quit                end revert or cherry-pick sequence</span></span>
<span class="line"><span>    --continue            resume revert or cherry-pick sequence</span></span>
<span class="line"><span>    --abort               cancel revert or cherry-pick sequence</span></span>
<span class="line"><span>    --skip                skip current commit and continue</span></span>
<span class="line"><span>    --cleanup &lt;mode&gt;      how to strip spaces and #comments from message</span></span>
<span class="line"><span>    -n, --no-commit       don&#39;t automatically commit</span></span>
<span class="line"><span>    -e, --edit            edit the commit message</span></span>
<span class="line"><span>    -s, --signoff         add a Signed-off-by trailer</span></span>
<span class="line"><span>    -m, --mainline &lt;parent-number&gt;</span></span>
<span class="line"><span>                          select mainline parent</span></span>
<span class="line"><span>    --rerere-autoupdate   update the index with reused conflict resolution if possible</span></span>
<span class="line"><span>    --strategy &lt;strategy&gt;</span></span>
<span class="line"><span>                          merge strategy</span></span>
<span class="line"><span>    -X, --strategy-option &lt;option&gt;</span></span>
<span class="line"><span>                          option for merge strategy</span></span>
<span class="line"><span>    -S, --gpg-sign[=&lt;key-id&gt;]</span></span>
<span class="line"><span>                          GPG sign commit</span></span>
<span class="line"><span>    --reference           use the &#39;reference&#39; format to refer to commits</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="rm" tabindex="-1"><a class="header-anchor" href="#rm"><span>rm</span></a></h2><details class="hint-container details"><summary>git rm -h</summary><div class="language-" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>usage: git rm [-f | --force] [-n] [-r] [--cached] [--ignore-unmatch]</span></span>
<span class="line"><span>              [--quiet] [--pathspec-from-file=&lt;file&gt; [--pathspec-file-nul]]</span></span>
<span class="line"><span>              [--] [&lt;pathspec&gt;...]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    -n, --dry-run         dry run</span></span>
<span class="line"><span>    -q, --quiet           do not list removed files</span></span>
<span class="line"><span>    --cached              only remove from the index</span></span>
<span class="line"><span>    -f, --force           override the up-to-date check</span></span>
<span class="line"><span>    -r                    allow recursive removal</span></span>
<span class="line"><span>    --ignore-unmatch      exit with a zero status even if nothing matched</span></span>
<span class="line"><span>    --sparse              allow updating entries outside of the sparse-checkout cone</span></span>
<span class="line"><span>    --pathspec-from-file &lt;file&gt;</span></span>
<span class="line"><span>                          read pathspec from file</span></span>
<span class="line"><span>    --pathspec-file-nul   with --pathspec-from-file, pathspec elements are separated with NUL character</span></span></code></pre></div></details><h2 id="stash" tabindex="-1"><a class="header-anchor" href="#stash"><span>stash</span></a></h2><details class="hint-container details"><summary>git stash -h</summary><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>usage: git stash list [&lt;log-options&gt;]</span></span>
<span class="line"><span>   or: git stash show [-u | --include-untracked | --only-untracked] [&lt;diff-options&gt;] [&lt;stash&gt;]</span></span>
<span class="line"><span>   or: git stash drop [-q | --quiet] [&lt;stash&gt;]</span></span>
<span class="line"><span>   or: git stash pop [--index] [-q | --quiet] [&lt;stash&gt;]</span></span>
<span class="line"><span>   or: git stash apply [--index] [-q | --quiet] [&lt;stash&gt;]</span></span>
<span class="line"><span>   or: git stash branch &lt;branchname&gt; [&lt;stash&gt;]</span></span>
<span class="line"><span>   or: git stash [push [-p | --patch] [-S | --staged] [-k | --[no-]keep-index] [-q | --quiet]</span></span>
<span class="line"><span>                 [-u | --include-untracked] [-a | --all] [(-m | --message) &lt;message&gt;]</span></span>
<span class="line"><span>                 [--pathspec-from-file=&lt;file&gt; [--pathspec-file-nul]]</span></span>
<span class="line"><span>                 [--] [&lt;pathspec&gt;...]]</span></span>
<span class="line"><span>   or: git stash save [-p | --patch] [-S | --staged] [-k | --[no-]keep-index] [-q | --quiet]</span></span>
<span class="line"><span>                 [-u | --include-untracked] [-a | --all] [&lt;message&gt;]</span></span>
<span class="line"><span>   or: git stash clear</span></span>
<span class="line"><span>   or: git stash create [&lt;message&gt;]</span></span>
<span class="line"><span>   or: git stash store [(-m | --message) &lt;message&gt;] [-q | --quiet] &lt;commit&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="status" tabindex="-1"><a class="header-anchor" href="#status"><span>status</span></a></h2><details class="hint-container details"><summary>git status -h</summary><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>usage: git status [&lt;options&gt;] [--] [&lt;pathspec&gt;...]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    -v, --verbose         be verbose</span></span>
<span class="line"><span>    -s, --short           show status concisely</span></span>
<span class="line"><span>    -b, --branch          show branch information</span></span>
<span class="line"><span>    --show-stash          show stash information</span></span>
<span class="line"><span>    --ahead-behind        compute full ahead/behind values</span></span>
<span class="line"><span>    --porcelain[=&lt;version&gt;]</span></span>
<span class="line"><span>                          machine-readable output</span></span>
<span class="line"><span>    --long                show status in long format (default)</span></span>
<span class="line"><span>    -z, --null            terminate entries with NUL</span></span>
<span class="line"><span>    -u, --untracked-files[=&lt;mode&gt;]</span></span>
<span class="line"><span>                          show untracked files, optional modes: all, normal, no. (Default: all)</span></span>
<span class="line"><span>    --ignored[=&lt;mode&gt;]    show ignored files, optional modes: traditional, matching, no. (Default: traditional)</span></span>
<span class="line"><span>    --ignore-submodules[=&lt;when&gt;]</span></span>
<span class="line"><span>                          ignore changes to submodules, optional when: all, dirty, untracked. (Default: all)</span></span>
<span class="line"><span>    --column[=&lt;style&gt;]    list untracked files in columns</span></span>
<span class="line"><span>    --no-renames          do not detect renames</span></span>
<span class="line"><span>    -M, --find-renames[=&lt;n&gt;]</span></span>
<span class="line"><span>                          detect renames, optionally set similarity index</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="switch" tabindex="-1"><a class="header-anchor" href="#switch"><span>switch</span></a></h2><details class="hint-container details"><summary>git switch -h</summary><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>usage: git switch [&lt;options&gt;] [&lt;branch&gt;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    -c, --create &lt;branch&gt;</span></span>
<span class="line"><span>                          create and switch to a new branch</span></span>
<span class="line"><span>    -C, --force-create &lt;branch&gt;</span></span>
<span class="line"><span>                          create/reset and switch to a branch</span></span>
<span class="line"><span>    --guess               second guess &#39;git switch &lt;no-such-branch&gt;&#39;</span></span>
<span class="line"><span>    --discard-changes     throw away local modifications</span></span>
<span class="line"><span>    -q, --quiet           suppress progress reporting</span></span>
<span class="line"><span>    --recurse-submodules[=&lt;checkout&gt;]</span></span>
<span class="line"><span>                          control recursive updating of submodules</span></span>
<span class="line"><span>    --progress            force progress reporting</span></span>
<span class="line"><span>    -m, --merge           perform a 3-way merge with the new branch</span></span>
<span class="line"><span>    --conflict &lt;style&gt;    conflict style (merge, diff3, or zdiff3)</span></span>
<span class="line"><span>    -d, --detach          detach HEAD at named commit</span></span>
<span class="line"><span>    -t, --track[=(direct|inherit)]</span></span>
<span class="line"><span>                          set branch tracking configuration</span></span>
<span class="line"><span>    -f, --force           force checkout (throw away local modifications)</span></span>
<span class="line"><span>    --orphan &lt;new-branch&gt;</span></span>
<span class="line"><span>                          new unparented branch</span></span>
<span class="line"><span>    --overwrite-ignore    update ignored files (default)</span></span>
<span class="line"><span>    --ignore-other-worktrees</span></span>
<span class="line"><span>                          do not check if another worktree is holding the given ref</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="tag" tabindex="-1"><a class="header-anchor" href="#tag"><span>tag</span></a></h2><details class="hint-container details"><summary>git tag -h</summary><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>usage: git tag [-a | -s | -u &lt;key-id&gt;] [-f] [-m &lt;msg&gt; | -F &lt;file&gt;] [-e]</span></span>
<span class="line"><span>               &lt;tagname&gt; [&lt;commit&gt; | &lt;object&gt;]</span></span>
<span class="line"><span>   or: git tag -d &lt;tagname&gt;...</span></span>
<span class="line"><span>   or: git tag [-n[&lt;num&gt;]] -l [--contains &lt;commit&gt;] [--no-contains &lt;commit&gt;]</span></span>
<span class="line"><span>               [--points-at &lt;object&gt;] [--column[=&lt;options&gt;] | --no-column]</span></span>
<span class="line"><span>               [--create-reflog] [--sort=&lt;key&gt;] [--format=&lt;format&gt;]</span></span>
<span class="line"><span>               [--merged &lt;commit&gt;] [--no-merged &lt;commit&gt;] [&lt;pattern&gt;...]</span></span>
<span class="line"><span>   or: git tag -v [--format=&lt;format&gt;] &lt;tagname&gt;...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    -l, --list            list tag names</span></span>
<span class="line"><span>    -n[&lt;n&gt;]               print &lt;n&gt; lines of each tag message</span></span>
<span class="line"><span>    -d, --delete          delete tags</span></span>
<span class="line"><span>    -v, --verify          verify tags</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Tag creation options</span></span>
<span class="line"><span>    -a, --annotate        annotated tag, needs a message</span></span>
<span class="line"><span>    -m, --message &lt;message&gt;</span></span>
<span class="line"><span>                          tag message</span></span>
<span class="line"><span>    -F, --file &lt;file&gt;     read message from file</span></span>
<span class="line"><span>    -e, --edit            force edit of tag message</span></span>
<span class="line"><span>    -s, --sign            annotated and GPG-signed tag</span></span>
<span class="line"><span>    --cleanup &lt;mode&gt;      how to strip spaces and #comments from message</span></span>
<span class="line"><span>    -u, --local-user &lt;key-id&gt;</span></span>
<span class="line"><span>                          use another key to sign the tag</span></span>
<span class="line"><span>    -f, --force           replace the tag if exists</span></span>
<span class="line"><span>    --create-reflog       create a reflog</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Tag listing options</span></span>
<span class="line"><span>    --column[=&lt;style&gt;]    show tag list in columns</span></span>
<span class="line"><span>    --contains &lt;commit&gt;   print only tags that contain the commit</span></span>
<span class="line"><span>    --no-contains &lt;commit&gt;</span></span>
<span class="line"><span>                          print only tags that don&#39;t contain the commit</span></span>
<span class="line"><span>    --merged &lt;commit&gt;     print only tags that are merged</span></span>
<span class="line"><span>    --no-merged &lt;commit&gt;  print only tags that are not merged</span></span>
<span class="line"><span>    --sort &lt;key&gt;          field name to sort on</span></span>
<span class="line"><span>    --points-at &lt;object&gt;  print only tags of the object</span></span>
<span class="line"><span>    --format &lt;format&gt;     format to use for the output</span></span>
<span class="line"><span>    --color[=&lt;when&gt;]      respect format colors</span></span>
<span class="line"><span>    -i, --ignore-case     sorting and filtering are case insensitive</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,49))])}const o=n(t,[["render",r],["__file","git.html.vue"]]),v=JSON.parse('{"path":"/git.html","title":"Git 常用命令","lang":"zh-CN","frontmatter":{"title":"Git 常用命令","category":["Note"],"tag":["Git"],"description":"记录 Git 常用命令","head":[["link",{"rel":"canonical","href":"https://theme-hope.vuejs.press/git.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope.github.io/blog/git.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"Git 常用命令"}],["meta",{"property":"og:description","content":"记录 Git 常用命令"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-07T05:47:32.000Z"}],["meta",{"property":"article:tag","content":"Git"}],["meta",{"property":"article:modified_time","content":"2024-10-07T05:47:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Git 常用命令\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-07T05:47:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Flueky Zuo\\",\\"url\\":\\"https://flueky.github.io\\",\\"email\\":\\"flueky.zuo@gmail.com\\"}]}"]]},"headers":[{"level":2,"title":"add","slug":"add","link":"#add","children":[]},{"level":2,"title":"apply","slug":"apply","link":"#apply","children":[]},{"level":2,"title":"branch","slug":"branch","link":"#branch","children":[]},{"level":2,"title":"checkout","slug":"checkout","link":"#checkout","children":[]},{"level":2,"title":"cherry-pick","slug":"cherry-pick","link":"#cherry-pick","children":[]},{"level":2,"title":"clone","slug":"clone","link":"#clone","children":[]},{"level":2,"title":"commit","slug":"commit","link":"#commit","children":[]},{"level":2,"title":"config","slug":"config","link":"#config","children":[]},{"level":2,"title":"fetch","slug":"fetch","link":"#fetch","children":[]},{"level":2,"title":"format-patch","slug":"format-patch","link":"#format-patch","children":[]},{"level":2,"title":"init","slug":"init","link":"#init","children":[]},{"level":2,"title":"log","slug":"log","link":"#log","children":[]},{"level":2,"title":"merge","slug":"merge","link":"#merge","children":[]},{"level":2,"title":"pull","slug":"pull","link":"#pull","children":[]},{"level":2,"title":"push","slug":"push","link":"#push","children":[]},{"level":2,"title":"rebase","slug":"rebase","link":"#rebase","children":[]},{"level":2,"title":"reset","slug":"reset","link":"#reset","children":[]},{"level":2,"title":"revert","slug":"revert","link":"#revert","children":[]},{"level":2,"title":"rm","slug":"rm","link":"#rm","children":[]},{"level":2,"title":"stash","slug":"stash","link":"#stash","children":[]},{"level":2,"title":"status","slug":"status","link":"#status","children":[]},{"level":2,"title":"switch","slug":"switch","link":"#switch","children":[]},{"level":2,"title":"tag","slug":"tag","link":"#tag","children":[]}],"git":{"createdTime":1728102180000,"updatedTime":1728280052000,"contributors":[{"name":"Flueky Zuo","email":"flueky.zuo@zoom.us","commits":2}]},"readingTime":{"minutes":17.15,"words":5146},"filePathRelative":"git.md","localizedDate":"2024年10月5日","excerpt":"<p>记录 Git 常用命令</p>\\n","autoDesc":true}');export{o as comp,v as data};
