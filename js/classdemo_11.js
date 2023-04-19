const showClassDemo = (week) => {
    const showDemo = document.querySelector('.banner-section');
    switch(week){
        case 'w1':
            showDemo.innerHTML = `<iframe src='./demo/w01/index.html' width="100%" height="100%"/>`
            break;
        case 'w1-md':
            showDemo.innerHTML = `<iframe src='./demo/md/w01/w01_11.html' width="100%" height="100%"/>`
            break;
        case 'w2':
            showDemo.innerHTML = `<iframe src='./demo/w02.tictactoe/tictactoe-starter/tictactoe_11.html' width="100%" height="100%"/>`
            break;
        case 'w2-md':
            showDemo.innerHTML = `<iframe src='./demo/md/w02/w02_11.html' width="100%" height="100%"/>`
            break;
        case 'w3':
            showDemo.innerHTML = `<iframe src='./demo/w03.review/index.html' width="100%" height="100%"/>`
            break;
        case 'w3-md':
            showDemo.innerHTML = `<iframe src='./demo/md/w03/w03_11.html' width="100%" height="100%"/>`
            break;
        case 'w4':
            showDemo.innerHTML = `<iframe src='./demo/w04-menu/index.html' width="100%" height="100%"/>`
            break;
        case 'w4-md':
            showDemo.innerHTML = `<iframe src='./demo/md/w04/w04_11.html' width="100%" height="100%"/>`
            break;
        case 'w5':
            showDemo.innerHTML = `<iframe src='./demo/w05-menu/index.html' width="100%" height="100%"/>`
            break; 
        case 'w5-1':
            showDemo.innerHTML = `<iframe src='./demo/w05-modal/index.html' width="100%" height="100%"/>`
            break;
        case 'w5-md':
            showDemo.innerHTML = `<iframe src='./demo/md/w05/w05_11.html' width="100%" height="100%"/>`
            break;  
        case 'w6-md':
            showDemo.innerHTML = `<iframe src='./demo/md/w06/w06_11.html' width="100%" height="100%"/>`
            break;
        case 'p1':
            showDemo.innerHTML = `<iframe src='./demo/w06-array/p1_11/p1_11.html' width="100%" height="100%"/>`
            break;
        case 'p2':
            showDemo.innerHTML = `<iframe src='./demo/w06-array/p2_11/p2_11.html' width="100%" height="100%"/>`
            break;
        case 'p3':
            showDemo.innerHTML = `<iframe src='./demo/w06-array/p3_11/p3_11.html' width="100%" height="100%"/>`
            break;
        case 'w9-md':
            showDemo.innerHTML = `<iframe src='./demo/md/w09/w09_11.html' width="100%" height="100%"/>`
            break;  
        case 'p1-1':
            showDemo.innerHTML = `<iframe src='./demo/w09-midprep/p1_bmi_11/p1_11.html' width="100%" height="100%"/>`
            break;
        case 'p2-2':
            showDemo.innerHTML = `<iframe src='./demo/w09-midprep/p2_counter_11/index.html' width="100%" height="100%"/>`
            break;
        case 'p3-3':
            showDemo.innerHTML = `<iframe src='./demo/w09-midprep/p3_tour_11/index.html' width="100%" height="100%"/>`
            break;
    }
}