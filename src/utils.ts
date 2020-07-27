/**
 * convert an array of string-number to number
 * @param array 
 */
export function convertStr2Num(array: string[] = []): Number[] {
    let result = [];
    array.forEach(item => {
        result.push(Math.round(Number(item)))
    })
    return result;
}

/**
 * Divide an array into several array blocks according to the specified array size
 * @param array 
 * @param size split size
 */
export function chunk(array: any[], size: number, pathCmd: string) {
    if (array.length < size) return array;
    let result = [];
    for(let i = 0; i < array.length; i+=size) {
        result.push(array.slice(i, i + size))
    }
    // if (pathCmd.toUpperCase() === 'C') {
    //     result.splice(result.length - 1, 1)
    // }
    return result;
}

/**
 * get absolute cordinate
 * @param array 
 * @param baseCordinate Relative to the first point
 */
export function getAbsoluteCordinate(array: any[][], baseCordinate: {x: number, y: number}): any[][] {
    let result = []
    array.forEach((cordinate, index) => {
        if (index === 0) {
            result.push([cordinate[0] + baseCordinate.x, cordinate[1] + baseCordinate.y])
        } else {
            result.push([cordinate[0] + result[index - 1][0], cordinate[1] + result[index - 1][1]])
        }
    })
    return result;
}

// generateKeyPointDataByPath(pathStr: string) {
//     let regPath = /[A-Za-z]( *[^A-Za-z] *)+(?=[A-Za-z]* *)/g,    // divide path to segments according to Path-Command
//         regSegment = /[\s|\-]([^A-Za-z\-\s])+/g,  // Split path segments to obtain coordinate points
//         keyPointData: KeyPoint[] = [],
//         pathSegments: string[];
//     // only support path command ['M', 'C', 'L']
//     let noSupportCmds = ['H', 'V', 'S', 'Q', 'T', 'A'],
//         cmdReg = /[A-Za-z]/g,
//         cmds = pathStr.match(cmdReg) || [];
//     for (let i = 0; i < cmds.length; i++) {
//         const cmd = cmds[i];
//         if (noSupportCmds.includes(cmd.toUpperCase())) {
//             alert('Path contains unSupport commands')
//             return;
//         }
//     }
//     pathSegments = pathStr.match(regPath) || [];
//     pathSegments.forEach((path, index) => {
//         const cmd = path.substring(0, 1)
//         const relativeCmds = ['c', 'l']
//         let cordinates = chunk(convertStr2Num(path.replace(/[A-Za-z]/, ' ').match(regSegment)), 2, cmd)

//         if (keyPointData.length === 0) {
//             let x = cordinates[0][0],
//                 y = cordinates[0][1];
//             let keyPoint = new KeyPoint({
//                 type: 'M',
//                 point: {x, y},
//                 pointType: CONST.POINT_TYPE.STRAIGHT,
//                 relationPoints: [x, y],
//                 keyPointIndex: keyPointData.length
//             })
//             keyPointData.push(keyPoint)
//         } else {
//             // whether the cmd indicated the cordinate is relative
//             if (relativeCmds.includes(cmd)) {
//                 cordinates = getAbsoluteCordinate(cordinates, keyPointData[keyPointData.length - 1].point)
//             }
            
//             if (cmd.toUpperCase() === 'C') {
//                 let keyPoint: KeyPoint,
//                     preKeyPoint = keyPointData[keyPointData.length - 1],
//                     preLeft = preKeyPoint.point.x,
//                     preTop = preKeyPoint.point.y,
//                     controller1: IController = {
//                         x: cordinates[0][0],
//                         y: cordinates[0][1]
//                     },
//                     controller2: IController = {
//                         x: cordinates[1][0],
//                         y: cordinates[1][1]
//                     },
//                     x = cordinates[1][0],
//                     y = cordinates[1][1];
//                 if (preKeyPoint.controller2) {
//                     preLeft = preKeyPoint.controller2.x;
//                     preTop = preKeyPoint.controller2.y;
//                 }

//                 keyPoint = new KeyPoint({
//                     type: 'C',
//                     point: { x, y },
//                     pointType: CONST.POINT_TYPE.STRAIGHT,
//                     relationPoints: [preLeft, preTop, controller2.x, controller2.y, x, y],
//                     keyPointIndex: keyPointData.length,
//                     controller1,
//                     controller2
//                 })
//                 keyPointData.push(keyPoint);
                
//             } else if (cmd.toUpperCase() === 'L') {
//                 cordinates.forEach((cordinate, index) => {
//                     let keyPoint: KeyPoint,
//                         preKeyPoint = keyPointData[keyPointData.length - 1],
//                         preLeft = preKeyPoint.point.x,
//                         preTop = preKeyPoint.point.y,
//                         x = cordinate[0],
//                         y = cordinate[1];
//                     if (preKeyPoint.pointType !== CONST.POINT_TYPE.STRAIGHT) {
//                         preLeft = preKeyPoint.controller2.x;
//                         preTop = preKeyPoint.controller2.y;
//                     }
                    
//                     keyPoint = new KeyPoint({
//                         type: 'C',
//                         point: { x, y },
//                         pointType: CONST.POINT_TYPE.STRAIGHT,
//                         relationPoints: [preLeft, preTop, x, y, x, y],
//                         keyPointIndex: keyPointData.length
//                     })
//                     keyPointData.push(keyPoint);
//                 })
//             }
//         }
//     })
//     if (pathStr.indexOf('z') > 0 || pathStr.indexOf('Z') > 0) {
//         this.closeState = true;
//     }
//     return keyPointData
// }