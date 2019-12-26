# systemio

This library is used to closely resemble the .NET System.IO library for file system CRUD operations.

Currently there are 4 classes that are supported. Not all of the functionality of these classes are supported. See below to detailed support.

## File Class
### Methods
Method | Supported | WIP
 --- | --- | ---
AppendAllLines | :heavy_check_mark: | :heavy_check_mark:
AppendAllLinesAsync |   |   
AppendAllText | :heavy_check_mark: | :heavy_check_mark:
AppendAllTextAsync |   |   
AppendText |   |   
Copy | :heavy_check_mark: | :heavy_check_mark:
Create | :heavy_check_mark: | :heavy_check_mark:
CreateText |   |   
Decrypt |   |   
Delete | :heavy_check_mark: | :heavy_check_mark:
Encrypt |   |   
Exists | :heavy_check_mark: | :heavy_check_mark:
GetAccessControl |   |   
GetAttributes |   |   
GetCreationTime |   |   
GetCreationTimeUtc |   |   
GetLastAccessTime |   |   
GetLastAccessTimeUtc |   |   
GetLastWriteTime |   |   
GetLastWriteTimeUtc |   |   
Move | :heavy_check_mark: | :heavy_check_mark:
Open |   |   
OpenRead |   |   
OpenText |   |   
OpenWrite |   |   
ReadAllBytes |   |   
ReadAllBytesAsync |   |   
ReadAllLines | :heavy_check_mark: | :heavy_check_mark:
ReadAllLinesAsync |   |   
ReadAllText | :heavy_check_mark: | :heavy_check_mark:
ReadAllTextAsync |   |   
ReadLines |   |   
SetAccessControl |   |   
SetAttributes |   |   
SetCreationTime |   |   
SetCreationTimeUtc |   |   
SetLastAccessTime |   |   
SetLastAccessTimeUtc |   |   
SetLastWriteTime |   |   
SetLastWriteTimeUtc |   |   
WriteAllBytes |   |   
WriteAllBytesAsync |   |   
WriteAllLines | :heavy_check_mark: | :heavy_check_mark:
WriteAllLinesAsync |   |   
WriteAllText | :heavy_check_mark: | :heavy_check_mark:
WriteAllTextAsync |   |   

## FileInfo Class
### Properties
Property | Supported | WIP
 --- | --- | ---
Directory | :heavy_check_mark: | :heavy_check_mark:
DirectoryName | :heavy_check_mark: | :heavy_check_mark:
Exists | :heavy_check_mark: | :heavy_check_mark:
IsReadOnly |   |   
Length | :heavy_check_mark: | :heavy_check_mark:
Name | :heavy_check_mark: | :heavy_check_mark:
### Methods
Method | Supported | WIP
 --- | --- | ---
AppendText | :heavy_check_mark: | :heavy_check_mark:
CopyTo | :heavy_check_mark: | :heavy_check_mark:
Create | :heavy_check_mark: | :heavy_check_mark:
CreateText |   |   
Decrypt |   |   
Delete | :heavy_check_mark: | :heavy_check_mark:
Encrypt |   |   
GetAccessControl
MoveTo | :heavy_check_mark: | :heavy_check_mark:
Open |   |   
OpenRead |   |   
OpenText |   |   
OpenWrite |   |   
Replace |   |   
SetAccessControl |   |   
ToString |   |   
## Directory Class
### Methods
Method | Supported | WIP
 --- | --- | ---
CreateDirectory | :heavy_check_mark: | :heavy_check_mark:
Delete | :heavy_check_mark: | :heavy_check_mark:
EnumerateDirectories |   |   
EnumerateFiles |   |   
EnumerateFileSystemEntries |   |   
Exists | :heavy_check_mark: | :heavy_check_mark:
GetAccessControl |   |   
GetCreationTime |   |   
GetCreationTimeUtc |   |   
GetCurrentDirectory | :heavy_check_mark: | :heavy_check_mark:
GetDirectories | :heavy_check_mark: | :heavy_check_mark:
GetDirectoryRoot | :heavy_check_mark: | :heavy_check_mark:
GetFiles | :heavy_check_mark: | :heavy_check_mark:
GetFileSystemEntries |   |   
GetLastAccessTime |   |   
GetLastAccessTimeUtc |   |   
GetLastWriteTime |   |   
GetLastWriteTimeUtc |   |   
GetLogicalDrives |   |   
GetParent | :heavy_check_mark: | :heavy_check_mark:
Move | :heavy_check_mark: | :heavy_check_mark:
SetAccessControl |   |   
SetCreationTime |   |   
SetCreationTimeUtc |   |   
SetCurrentDirectory |   |   
SetLastAccessTime |   |   
SetLastAccessTimeUtc |   |   
SetLastWriteTime |   |   
SetLastWriteTimeUtc |   |   
## DirectoryInfo Class
### Properties
Property | Supported | WIP
 --- | --- | ---
Exists | :heavy_check_mark: | :heavy_check_mark:
FullName | :heavy_check_mark: | :heavy_check_mark:
Name | :heavy_check_mark: | :heavy_check_mark:
Parent | :heavy_check_mark: | :heavy_check_mark:
Root | :heavy_check_mark: | :heavy_check_mark:
### Methods
Method | Supported | WIP
 --- | --- | ---
Create | :heavy_check_mark: | :heavy_check_mark:
CreateSubDirectory | :heavy_check_mark: | :heavy_check_mark:
Delete | :heavy_check_mark: | :heavy_check_mark:
EnumerateDirectories |   |   
EnumerateFiles |   |   
EnumerateFileSystemInfos |   |   
GetAccessControl |   |   
GetDirectories | :heavy_check_mark: | :heavy_check_mark:
GetFiles | :heavy_check_mark: | :heavy_check_mark:
GetFileSystemInfos |   |   
MoveTo | :heavy_check_mark: | :heavy_check_mark:
SetAccessControl |   |   
ToString |   |   
