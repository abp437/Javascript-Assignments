// var jsonString = '{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*';
document.getElementById('course-cover-youtube-video').contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*')
