angular.module('llnl.component.app', [])
.component('llnlApp', {
    templateUrl: 'components/llnl-app/llnl-app.html',
    controller: function() {
        this.leftLinks = [
            {
                name: 'Home',
                link: '#home'
            }
        ];

        this.rightLinks = [
            {
                name: 'Sign In',
                link: '#signin'
            }
        ];

        this.brand = {
            name: 'Angular Template',
            link: '/'
        };

        this.thumbnails = [
            {
                image: 'LLNL.jpg',
                label: 'Lawrence Livermore National Laboratory',
                content: 'This is an image from Lawrence Livermore National Laboratory.',
                firstButtonText: 'First Button',
                secondButtonText: 'Learn more',
                alt: 'LLNL Image'
            },
            {
                image: 'LLNL.jpg',
                label: 'Lawrence Livermore National Laboratory',
                content: 'This is an image from Lawrence Livermore National Laboratory.',
                firstButtonText: 'First Button',
                secondButtonText: 'Learn more',
                alt: 'LLNL Image'
            },
            {
                image: 'LLNL.jpg',
                label: 'Lawrence Livermore National Laboratory',
                content: 'This is an image from Lawrence Livermore National Laboratory.',
                firstButtonText: 'First Button',
                secondButtonText: 'Learn more',
                alt: 'LLNL Image'
            },
            {
                image: 'LLNL.jpg',
                label: 'Lawrence Livermore National Laboratory',
                content: 'This is an image from Lawrence Livermore National Laboratory.',
                firstButtonText: 'First Button',
                secondButtonText: 'Learn more',
                alt: 'LLNL Image'
            }
        ]
    }
});