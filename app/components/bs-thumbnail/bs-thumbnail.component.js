angular.module('bs.component.thumbnail', [])
/**
 * bsThumbnail
 *
 * @param thumbnail The thumbnail Object takes the following properties
 *          {
 *              image: 'imageNameFromImgFolder.extension',
 *              label: String,
 *              content: String,
 *              firstButtonText: String,
 *              secondButtonText: String,
 *              alt: String
 *          }
 */
.component('bsThumbnail', {
    templateUrl: 'components/bs-thumbnail/bs-thumbnail.html',
    bindings: {
        thumbnail: '='
    }
});