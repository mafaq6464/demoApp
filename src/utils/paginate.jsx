export function paginate( items, pageNumber, pageSize ){
    const startIndex = ( pageNumber - 1 ) * pageSize;
    return items.slice(startIndex,(startIndex+pageSize>items.length-1? startIndex+items.length-1 : startIndex+pageSize ) )
}