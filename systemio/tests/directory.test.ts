import assert = require('assert');
import { directory, directoryInfo } from '../systemio';

export function Directory_createDirectory() {
    var testpath: string = "test";
    var test: directoryInfo;
    assert.doesNotThrow(() => {
        test = directory.createDirectory(testpath);
    });

    assert.ok(test.exists);

    // cleanup
    assert.doesNotThrow(() => {
        directory.delete(testpath);
    });
};

export function Directory_delete() {
    var testpath: string = "test";
    var test: directoryInfo;

    // set up
    assert.doesNotThrow(() => {
        test = directory.createDirectory(testpath);
    });

    assert.ok(test.exists);
    assert.doesNotThrow(() => {
        directory.delete(testpath);
    });
};

export function Directory_exists() {
    var testpath: string = "test";
    var test: directoryInfo;

    // set up
    assert.doesNotThrow(() => {
        test = directory.createDirectory(testpath);
    });

    assert.ok(directory.exists(testpath));

    // clean up
    assert.doesNotThrow(() => {
        directory.delete(testpath);
    });
};