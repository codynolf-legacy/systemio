import { wait } from './util';
import { file, fileInfo, directory, directoryInfo } from './systemio';

try {
    var di = directory.createDirectory("test");
    var time = directory.getCreationTime(di.fullName);
    var dirs = directory.getDirectories("test");
    var files = directory.getFiles("test");

    //directory.delete(di.fullName);

    var bp = 0;
}
catch (ex) {
    console.log(ex);
}

wait(15555000);