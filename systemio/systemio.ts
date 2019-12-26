import { BinaryLike } from "crypto";


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

    /*
     * TODO: figure out if this is possible
    */
    public static readAllBytes(path: string):BinaryLike[] {
        return null;
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
    public static createDirectory(path: string):directoryInfo {
        return null;
    }

    public static delete(path: string): void {

    }

    public static exists(path: string): void {

    }

    public static getCreationTime(path: string): Date {
        return null;
    }

    public static getCreationTimeUtc(path: string): Date {
        return null;
    }

    public static getCurrentDirectory(): string {
        return null;
    }

    public static getDirectories(path: string): string[] {
        return null;
    }

    public static getDirectoryRoot(path: string): string {
        return null;
    }

    public static getFiles(path: string): string[] {
        return null;
    }

    public static getParent(path: string):directoryInfo {
        return null;
    }
}

export class directoryInfo {

    private path: string;

    public exists: boolean;
    public fullName: string;
    public name: string;
    public parent: directoryInfo;
    public root: directoryInfo;

    constructor(path: string) {
        this.path = path;
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