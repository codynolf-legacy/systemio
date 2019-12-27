import { existsSync, mkdirSync, statSync, rmdirSync, readdirSync } from 'fs';
import { resolve } from 'path';


export class systemio {

}

export class file {
    public static appendAllLines(path: string, lines: string[]): void {

    }

    public static appendAllLinesAsync(path: string, lines: string[]): void {

    }

    public static appendAllText(path: string, text: string): void {

    }

    public static appendAllTextAsync(path: string, text: string): void {

    }

    public static copy(sourcePath: string, destPath: string):void {

    }

    public static create(path: string): fileInfo {
        return null;
    }

    public static delete(path: string): void {

    }

    public static exists(path: string): boolean {
        return false;
    }

    public static move(sourcePath: string, destPath: string): void {

    }

    public static readAllLines(path: string): string[] {
        return null;
    }

    public static readAllText(path: string): string {
        return null;
    }

    public static writeAllLines(path: string, lines: string[]): void {

    }

    public static writeAllText(path: string, text: string): void {

    }
}

export class fileInfo {
    private path: string;

    public directory: directory;
    public directoryName: string;
    public exists: boolean;
    public length: number;
    public name: string;

    constructor(path: string) {
        this.path = path;
    }

    public appendText(text: string):void {

    }

    public copyTo(destfilename: string): fileInfo {
        return null;
    }

    public create(): void {

    }

    public createText(text: string):void {

    }

    public delete(): void {

    }
}

export class directory {
    public static createDirectory(path: string): directoryInfo {
        if (!existsSync(path)) {
            mkdirSync(path);
        }

        return new directoryInfo(path);
    }

    public static delete(path: string): void {
        if (existsSync(path)) {
            rmdirSync(path);
        }
    }

    public static exists(path: string): boolean {
        return existsSync(path);
    }

    public static getCreationTime(path: string): Date {

        var stat = statSync(path);

        return stat.birthtime;
    }

    public static getCreationTimeUtc(path: string): Date {
        var stat = statSync(path);
        var localtime: Date = stat.birthtime;
        var utc = new Date(
            localtime.getUTCFullYear(),
            localtime.getUTCMonth(),
            localtime.getUTCDate(),
            localtime.getUTCHours(),
            localtime.getUTCMinutes(),
            localtime.getUTCSeconds(),
            localtime.getUTCMilliseconds()
        );

        return utc;
    }

    public static getCurrentDirectory(): string {
        return __dirname;
    }

    public static getDirectories(path: string): string[] {
        var dirPaths: string[] = [];
        readdirSync(path, { withFileTypes: true }).forEach(file => {
            if (file.isDirectory()) {
                dirPaths.push(resolve(resolve(__dirname, path), file.name));
            }
        });
        return dirPaths;
    }

    public static getDirectoryRoot(path: string): string {
        return resolve(__dirname, path).split("\\")[0] + "\\";
    }

    public static getFiles(path: string): string[] {
        var filePaths: string[] = [];
        readdirSync(path, { withFileTypes: true }).forEach(file => {
            if (file.isFile()) {
                filePaths.push(resolve(resolve(__dirname, path), file.name));
            }
        });
        return filePaths;
    }

    public static getParent(path: string): directoryInfo {
        var absPath = resolve(__dirname, path);
        return new directoryInfo(absPath.substring(0, absPath.lastIndexOf("\\") + 1));
    }
}

export class directoryInfo {

    private path: string;
    private parentpath: string;
    private rootpath: string;

    public exists: boolean;
    public fullName: string;
    public name: string;
    public parent: directoryInfo;
    public root: directoryInfo;

    constructor(path: string) {
        this.path = resolve(__dirname, path);
        this.parentpath = this.path.substring(0, this.path.lastIndexOf("\\") + 1);
        this.rootpath = this.path.split("\\")[0] + "\\";

        this.exists = existsSync(path);
        this.fullName = this.path;
        this.name = this.path.substring(this.path.lastIndexOf("\\")+1, this.path.length);
        this.parent = (this.parentpath != this.path) ? new directoryInfo(this.path.substring(0, this.path.lastIndexOf("\\")+1)) : null;
        this.root = (this.parentpath != this.path) ? new directoryInfo(this.rootpath) : this;
    }

    public create():void {

    }

    public createSubDirectory(path: string): directoryInfo {
        return new directoryInfo(path);
    }

    public delete(): void {

    }

    public getDirectories(): directoryInfo[] {
        return null;
    }

    public getFiles(): fileInfo[] {
        return null;
    }
}