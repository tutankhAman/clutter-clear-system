const fs = require('fs');
const path = require('path');

if (!fs.existsSync(path.join(__dirname, 'Documents'))) {
    fs.mkdirSync(path.join(__dirname, 'Documents'));
}
if (!fs.existsSync(path.join(__dirname, 'Images'))) {
    fs.mkdirSync(path.join(__dirname, 'Images'));
}
if (!fs.existsSync(path.join(__dirname, 'Audios'))) {
    fs.mkdirSync(path.join(__dirname, 'Audios'));
}
if (!fs.existsSync(path.join(__dirname, 'Videos'))) {
    fs.mkdirSync(path.join(__dirname, 'Videos'));
}
if (!fs.existsSync(path.join(__dirname, 'Compressed Files'))) {
    fs.mkdirSync(path.join(__dirname, 'Compressed Files'));
}
if (!fs.existsSync(path.join(__dirname, 'Web Files'))) {
    fs.mkdirSync(path.join(__dirname, 'Web Files'));
}
if (!fs.existsSync(path.join(__dirname, 'Executables'))) {
    fs.mkdirSync(path.join(__dirname, 'Executables'));
}
if (!fs.existsSync(path.join(__dirname, 'Other'))) {
    fs.mkdirSync(path.join(__dirname, 'Other'));
}

fs.readdir(__dirname, (err, files) => {
    if (err) {
        console.error('Error reading directory', err);
    } else {
        files.forEach(file => {
            // Skip the sorter.js file
            if (file === 'sorter.js') {
                console.log('Skipping sorter.js');
                return; // Skip to the next file
            }
            
            const sourcePath = path.join(__dirname, file); // Correct source path
            
            // Check if the current item is a directory
            if (fs.lstatSync(sourcePath).isDirectory()) {
                console.log(`Skipping directory: ${file}`);
                return; // Skip to the next file
            }

            // logic for Documents
            if (file.endsWith('.pdf') || file.endsWith('.doc') || file.endsWith('.docx') || file.endsWith('.xls') || file.endsWith('.xlsx') || file.endsWith('.ppt') || file.endsWith('.pptx')) {
                const targetPath = path.join(__dirname, 'Documents', file);
                fs.access(targetPath, fs.constants.F_OK, (err) => {
                    if (err) {
                        fs.rename(sourcePath, targetPath, (err) => { 
                            if (err) {
                                console.error(err);
                            } else {
                                console.log('file moved to Documents');
                            }
                        });
                    } else {
                        console.log(`File already exists in Documents: ${file}`);
                    }
                });

            } 
            // logic for Images
            else if (file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg') || file.endsWith('.gif') || file.endsWith('.bmp') || file.endsWith('.tiff') || file.endsWith('.svg') || file.endsWith('.ico')) 
                
                {
                const targetPath = path.join(__dirname, 'Images', file);
                fs.access(targetPath, fs.constants.F_OK, (err) => {
                    if (err) {
                        fs.rename(sourcePath, targetPath, (err) => { 
                            if (err) {
                                console.error(err);
                            } else {
                                console.log('file moved to Images');
                            }
                        });
                    } else {
                        console.log(`File already exists in Images: ${file}`);
                    }
                });

            } 
            //logic for Audios
            else if (file.endsWith('.mp3')|| file.endsWith('.wav') || file.endsWith('.ogg') || file.endsWith('.flac') || file.endsWith('.aac') || file.endsWith('.m4a') || file.endsWith('.wma') || file.endsWith('.aiff') || file.endsWith('.ape') || file.endsWith('.au') || file.endsWith('.snd') || file.endsWith('.mid') || file.endsWith('.rmi') || file.endsWith('.xmf') || file.endsWith('.mpc') || file.endsWith('.mp+') || file.endsWith('.oga') || file.endsWith('.spx') || file.endsWith('.tta')) 
                
                {
                const targetPath = path.join(__dirname, 'Audios', file);
                fs.access(targetPath, fs.constants.F_OK, (err) => {
                    if (err) {
                        fs.rename(sourcePath, targetPath, (err) => {
                            if (err) {
                                console.error(err);
                            } else {
                                console.log('file moved to Audios');
                            }
                        });
                    } else {
                        console.log(`File already exists in Audios: ${file}`);
                    }
                });

            } 
            //logic for Videos
            else if (file.endsWith('.mp4') || file.endsWith('.avi') || file.endsWith('.mkv') || file.endsWith('.mov') || file.endsWith('.wmv') || file.endsWith('.flv') || file.endsWith('.f4v') || file.endsWith('.m4v') || file.endsWith('.mpg') || file.endsWith('.mpeg') || file.endsWith('.3gp') || file.endsWith('.ogv') || file.endsWith('.webm') || file.endsWith('.vob') || file.endsWith('.evo') || file.endsWith('.mts') || file.endsWith('.m2ts') || file.endsWith('.ts') || file.endsWith('.m2t') || file.endsWith('.m2p') || file.endsWith('.m2v') || file.endsWith('.asf') || file.endsWith('.wm')) 
                
                {
                const targetPath = path.join(__dirname, 'Videos', file);
                fs.access(targetPath, fs.constants.F_OK, (err) => {
                    if (err) {
                        fs.rename(sourcePath, targetPath, (err) => { 
                            if (err) {
                                console.error(err);
                            } else {
                                console.log('file moved to Videos');
                            }
                        });
                    } else {
                        console.log(`File already exists in Videos: ${file}`);
                    }
                });

            } 
            //logic for Compressed Files
            else if (file.endsWith('.zip') || file.endsWith('.rar') || file.endsWith('.tar') || file.endsWith('.gzip')) 
                
                {
                const targetPath = path.join(__dirname, 'Compressed Files', file);
                fs.access(targetPath, fs.constants.F_OK, (err) => {
                    if (err) {
                        fs.rename(sourcePath, targetPath, (err) => { 
                            if (err) {
                                console.error(err);
                            } else {
                                console.log('file moved to Compressed Files');
                            }
                        });
                    } else {
                        console.log(`File already exists in Compressed Files: ${file}`);
                    }
                });

            }  
            //logic for Web Files
            else if (file.endsWith('.html') || file.endsWith('.css') || file.endsWith('.js') || file.endsWith('.json') ) 
                
                {
                const targetPath = path.join(__dirname, 'Web Files', file);
                fs.access(targetPath, fs.constants.F_OK, (err) => {
                    if (err) {
                        fs.rename(sourcePath, targetPath, (err) => { 
                            if (err) {
                                console.error(err);
                            } else {
                                console.log('file moved to Web Files');
                            }
                        });
                    } else {
                        console.log(`File already exists in Web Files: ${file}`);
                    }
                });

             } 
             //logic for Executables
             else if (file.endsWith('.exe') || file.endsWith('.msi') || file.endsWith('.bat') || file.endsWith('.cmd') || file.endsWith('.com') || file.endsWith('.sh') || file.endsWith('.ps1') || file.endsWith('.vbs') || file.endsWith('.vbe') || file.endsWith('.wsf') || file.endsWith('.wsh') || file.endsWith('.lnk') || file.endsWith('.scr') || file.endsWith('.pif') || file.endsWith('.pl') || file.endsWith('.jar') || file.endsWith('.vb') || file.endsWith('.js') || file.endsWith('.jse') || file.endsWith('.ws') || file.endsWith('.wse') || file.endsWith('.hta') || file.endsWith('.cpl') || file.endsWith('.app')) 
                
                {
                const targetPath = path.join(__dirname, 'Executables', file);
                fs.access(targetPath, fs.constants.F_OK, (err) => {
                    if (err) {
                        fs.rename(sourcePath, targetPath, (err) => { 
                            if (err) {
                                console.error(err);
                            } else {
                                console.log('file moved to Executables');
                            }
                        });
                    } else {
                        console.log(`File already exists in Executables: ${file}`);
                    }
                });

            } 
            // logic for Other
            else {
                const targetPath = path.join(__dirname, 'Other', file);
                fs.access(targetPath, fs.constants.F_OK, (err) => {
                    if (err) {
                        fs.rename(sourcePath, targetPath, (err) => {
                            if (err) {
                                console.error(err);
                            } else {
                                console.log('file moved to Other');
                            }
                        });
                    } else {
                        console.log(`File already exists in Other: ${file}`);
                    }
                });
            }
        });
    }
});