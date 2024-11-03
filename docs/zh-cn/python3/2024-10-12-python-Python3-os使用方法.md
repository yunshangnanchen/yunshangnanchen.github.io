# Python3 OS 文件/目录方法

`os` 模块提供了非常丰富的方法用来处理文件和目录。常用的方法如下表所示：

| 序号 | 方法                        | 描述                                                                                   |
| :--: | :-------------------------- | :------------------------------------------------------------------------------------- |
|  1   | `os.access(path, mode)`     | 检验权限模式                                                                           |
|  2   | `os.chdir(path)`            | 改变当前工作目录                                                                        |
|  3   | `os.chflags(path, flags)`   | 设置路径的标记为数字标记。                                                              |
|  4   | `os.chmod(path, mode)`      | 更改权限                                                                               |
|  5   | `os.chown(path, uid, gid)`  | 更改文件所有者                                                                         |
|  6   | `os.chroot(path)`           | 改变当前进程的根目录                                                                    |
|  7   | `os.getcwd()`               | 返回当前工作目录                                                                        |
|  8   | `os.closerange(fd_low, fd_high)` | 关闭所有文件描述符，从 `fd_low` (包含) 到 `fd_high` (不包含), 错误会忽略               |
|  9   | `os.dup(fd)`                | 复制文件描述符 `fd`                                                                     |
| 10   | `os.dup2(fd, fd2)`          | 将一个文件描述符 `fd` 复制到另一个 `fd2`                                               |
| 11   | `os.fchdir(fd)`             | 通过文件描述符改变当前工作目录                                                          |
| 12   | `os.fchmod(fd, mode)`       | 改变一个文件的访问权限，该文件由参数 `fd` 指定，参数 `mode` 是 Unix 下的文件访问权限。 |
| 13   | `os.fchown(fd, uid, gid)`   | 修改一个文件的所有权，这个函数修改一个文件的用户 ID 和用户组 ID，该文件由文件描述符 `fd` 指定。 |
| 14   | `os.fdatasync(fd)`          | 强制将文件写入磁盘，该文件由文件描述符 `fd` 指定，但是不强制更新文件的状态信息。        |
| 15   | `os.fdopen(fd[, mode[, bufsize]])` | 通过文件描述符 `fd` 创建一个文件对象，并返回这个文件对象                                |
| 16   | `os.fpathconf(fd, name)`    | 返回一个打开的文件的系统配置信息。`name` 为检索的系统配置的值，它也许是一个定义系统值的字符串，这些名字在很多标准中指定（POSIX.1, Unix 95, Unix 98, 和其它）。 |
| 17   | `os.fstat(fd)`              | 返回文件描述符 `fd` 的状态，像 `stat()`。                                              |
| 18   | `os.fstatvfs(fd)`           | 返回包含文件描述符 `fd` 的文件的文件系统的信息，Python 3.3 相等于 `statvfs()`。         |
| 19   | `os.fsync(fd)`              | 强制将文件描述符为 `fd` 的文件写入硬盘。                                                |
| 20   | `os.ftruncate(fd, length)`  | 裁剪文件描述符 `fd` 对应的文件, 所以它最大不能超过文件大小。                            |
| 21   | `os.getcwdb()`              | 返回一个当前工作目录的 Unicode 对象                                                     |
| 22   | `os.isatty(fd)`             | 如果文件描述符 `fd` 是打开的，同时与 tty(-like) 设备相连，则返回 `True`, 否则 `False`。 |
| 23   | `os.lchflags(path, flags)`  | 设置路径的标记为数字标记，类似 `chflags()`，但是没有软链接                              |
| 24   | `os.lchmod(path, mode)`     | 修改连接文件权限                                                                        |
| 25   | `os.lchown(path, uid, gid)` | 更改文件所有者，类似 `chown`，但是不追踪链接。                                          |
| 26   | `os.link(src, dst)`         | 创建硬链接，名为参数 `dst`，指向参数 `src`                                              |
| 27   | `os.listdir(path)`          | 返回 `path` 指定的文件夹包含的文件或文件夹的名字的列表。                                 |
| 28   | `os.lseek(fd, pos, how)`    | 设置文件描述符 `fd` 当前位置为 `pos`，`how` 方式修改: `SEEK_SET` 或者 0 设置从文件开始的计算的 `pos`; `SEEK_CUR` 或者 1 则从当前位置计算; `os.SEEK_END` 或者 2 则从文件尾部开始. 在 Unix，Windows 中有效 |
| 29   | `os.lstat(path)`            | 像 `stat()`，但是没有软链接                                                             |
| 30   | `os.major(device)`          | 从原始的设备号中提取设备 major 号码 (使用 `stat` 中的 `st_dev` 或者 `st_rdev` field)。 |
| 31   | `os.makedev(major, minor)`  | 以 `major` 和 `minor` 设备号组成一个原始设备号                                          |
| 32   | `os.makedirs(path[, mode])`  | 递归文件夹创建函数。像 `mkdir()`，但创建的所有 intermediate-level 文件夹需要包含子文件夹。 |
| 33   | `os.minor(device)`          | 从原始的设备号中提取设备 minor 号码 (使用 `stat` 中的 `st_dev` 或者 `st_rdev` field)。 |
| 34   | `os.mkdir(path[, mode])`    | 以数字 `mode` 的 `mode` 创建一个名为 `path` 的文件夹。默认的 `mode` 是 `0777` (八进制)。 |
| 35   | `os.mkfifo(path[, mode])`   | 创建命名管道，`mode` 为数字，默认为 `0666` (八进制)                                     |
| 36   | `os.mknod(filename[, mode=0600, device])` | 创建一个名为 `filename` 文件系统节点（文件，设备特别文件或者命名 pipe）。             |
| 37   | `os.open(file, flags[, mode])` | 打开一个文件，并且设置需要的打开选项，`mode` 参数是可选的                               |
| 38   | `os.openpty()`              | 打开一个新的伪终端对。返回 `pty` 和 `tty` 的文件描述符。                                |
| 39   | `os.pathconf(path, name)`   | 返回相关文件的系统配置信息。                                                            |
| 40   | `os.pipe()`                 | 创建一个管道。返回一对文件描述符 `(r, w)` 分别为读和写                                  |
| 41   | `os.popen(command[, mode[, bufsize]])` | 从一个 `command` 打开一个管道                                                           |
| 42   | `os.read(fd, n)`            | 从文件描述符 `fd` 中读取最多 `n` 个字节，返回包含读取字节的字符串，文件描述符 `fd` 对应文件已达到结尾, 返回一个空字符串。 |
| 43   | `os.readlink(path)`         | 返回软链接所指向的文件                                                                  |
| 44   | `os.remove(path)`           | 删除路径为 `path` 的文件。如果 `path` 是一个文件夹，将抛出 `OSError`；查看下面的 `rmdir()` 删除一个 directory。 |
| 45   | `os.removedirs(path)`       | 递归删除目录。                                                                          |
| 46   | `os.rename(src, dst)`       | 重命名文件或目录，从 `src` 到 `dst`                                                    |
| 47   | `os.renames(old, new)`      | 递归地对目录进行更名，也可以对文件进行更名。                                             |
| 48   | `os.rmdir(path)`            | 删除 `path` 指定的空目录，如果目录非空，则抛出一个 `OSError` 异常。                     |
| 49   | `os.stat(path)`             | 获取 `path` 指定的路径的信息，功能等同于 C API 中的 `stat()` 系统调用。                  |
| 50   | `os.stat_float_times([newvalue])` | 决定 `stat_result` 是否以 `float` 对象显示时间戳                                        