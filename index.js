const fs = require('fs');
const path = require('path');

fs.mkdirSync(path.join(__dirname, 'Documents'));
fs.mkdirSync(path.join(__dirname, 'Images'));
fs.mkdirSync(path.join(__dirname, "Audios"));
fs.mkdirSync(path.join(__dirname, "Videos"));
fs.mkdirSync(path.join(__dirname, "Compressed Files"));
fs.mkdirSync(path.join(__dirname, "Web Files"));
fs.mkdirSync(path.join(__dirname, "Executables"));
fs.mkdirSync(path.join(__dirname, "Other"));

fs.readdir(__dirname, (err, files) => {
    if (err) {
        console.error('Error reading directory', err);
    } else {
        files.forEach(file => {
//logic for categorizing files
            //logic for Documents
            if (file.endsWith('.pdf') || file.endsWith('.doc') || file.endsWith('.docx') || file.endsWith('.xls') || file.endsWith('.xlsx') || file.endsWith('.ppt') || file.endsWith('.pptx')) 
                
                {
                fs.rename(path.join(__dirname, file), path.join(__dirname, 'Documents', file), (err) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log('file moved to Documents');
                    }
                });

            } 
            // logic for Images
            else if (file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg') || file.endsWith('.gif') || file.endsWith('.bmp') || file.endsWith('.tiff') || file.endsWith('.svg') || file.endsWith('.ico')) 
                
                {
                fs.rename(path.join(__dirname, file), path.join(__dirname, 'Images', file), (err) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log('file moved to Images');
                    }
                });

            } 
            //logic for Audios
            else if (file.endsWith('.mp3')|| file.endsWith('.wav') || file.endsWith('.ogg') || file.endsWith('.flac') || file.endsWith('.aac') || file.endsWith('.m4a') || file.endsWith('.wma') || file.endsWith('.aiff') || file.endsWith('.ape') || file.endsWith('.au') || file.endsWith('.snd') || file.endsWith('.mid') || file.endsWith('.rmi') || file.endsWith('.xmf') || file.endsWith('.mpc') || file.endsWith('.mp+') || file.endsWith('.oga') || file.endsWith('.spx') || file.endsWith('.tta')) 
                
                {
                fs.rename(path.join(__dirname, file), path.join(__dirname, 'Audios', file), (err) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log('file moved to Audios');
                    }
                });

            } 
            //logic for Videos
            else if (file.endsWith('.mp4') || file.endsWith('.avi') || file.endsWith('.mkv') || file.endsWith('.mov') || file.endsWith('.wmv') || file.endsWith('.flv') || file.endsWith('.f4v') || file.endsWith('.m4v') || file.endsWith('.mpg') || file.endsWith('.mpeg') || file.endsWith('.3gp') || file.endsWith('.ogv') || file.endsWith('.webm') || file.endsWith('.vob') || file.endsWith('.evo') || file.endsWith('.mts') || file.endsWith('.m2ts') || file.endsWith('.ts') || file.endsWith('.m2t') || file.endsWith('.m2p') || file.endsWith('.m2v') || file.endsWith('.asf') || file.endsWith('.wm')) 
                
                {
                fs.rename(path.join(__dirname, file), path.join(__dirname, 'Videos', file), (err) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log('file moved to Videos');
                    }
                });

            } 
            //logic for Compressed Files
            else if (file.endsWith('.zip') || file.endsWith('.rar') || file.endsWith('.tar') || file.endsWith('.gzip')) 
                
                {
                fs.rename(path.join(__dirname, file), path.join(__dirname, 'Compressed Files', file), (err) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log('file moved to Compressed Files');
                    }
                });

            }  
            //logic for Web Files
            else if (file.endsWith('.html') || file.endsWith('.css') || file.endsWith('.js') || file.endsWith('.json') ) 
                
                {
                fs.rename(path.join(__dirname, file), path.join(__dirname, 'Web Files', file), (err) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log('file moved to Web Files');
                    }
                });

             } 
             //logic for Executables
             else if (file.endsWith('.exe') || file.endsWith('.msi') || file.endsWith('.bat') || file.endsWith('.cmd') || file.endsWith('.com') || file.endsWith('.sh') || file.endsWith('.ps1') || file.endsWith('.vbs') || file.endsWith('.vbe') || file.endsWith('.wsf') || file.endsWith('.wsh') || file.endsWith('.lnk') || file.endsWith('.scr') || file.endsWith('.pif') || file.endsWith('.pl') || file.endsWith('.jar') || file.endsWith('.vb') || file.endsWith('.js') || file.endsWith('.jse') || file.endsWith('.ws') || file.endsWith('.wse') || file.endsWith('.hta') || file.endsWith('.cpl') || file.endsWith('.app')) 
                
                {
                fs.rename(path.join(__dirname, file), path.join(__dirname, 'Executables', file), (err) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log('file moved to Executables');
                    }
                });

            } 
            //logic for Other
            else {
                fs.rename(path.join(__dirname, file), path.join(__dirname, 'Others', file), (err) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log('file moved to Others');
                    }
                });
            }
        });
    }
});