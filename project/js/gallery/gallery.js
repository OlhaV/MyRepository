function Gallery(sSelector) {
    var g = this;
    
    
    //------------------properties-------------------
    g.init(sSelector);
    
    g.pictures = g.find('.picture_image');
    g.preview = g.find('.preview');
    g.prev = g.find('.preview_arrow_button_prev');
    g.next = g.find('.preview_arrow_button_next');
    g.previewImage = g.find('.preview_image');
    g.previewText = g.find('.preview_text');
    
    g.current = 0;
    g.max = g.pictures.length;
    
    //-------------------methods---------------------
    
    g.showPreview = function() {
        var picture = $(this);
        g.display(picture);
        g.current = g.pictures.index(picture);
    }
    
    g.showImage = function(iShift) {
        g.current += iShift;
        
        if(g.current >= g.max) {
            g.current = 0; 
        } else if (g.current < 0) {
            g.current = g.max - 1;
        }
        
        g.display(g.find('.picture_image:eq(' + g.current + ')'));
    }
    
    //функция, которая показывает картинку в превью
    g.display = function(oPicture) {
        var picSrc = oPicture.attr('src');
        console.log(picSrc);
        g.previewImage.attr('src', picSrc);
        g.previewText.html(oPicture.attr('alt'));
        g.preview.addClass('preview_shown');
    }

    
    g.closePreview = function() {
        if(!event || $(event.target).hasClass('preview')) {
            g.preview.removeClass('preview_shown');
        }
    }
    
    g.showPrevious = function() {
        g.showImage(-1);
    }
    
    g.showNext = function() {
        g.showImage(1);
    }
    
    g.escClosePreview = function() {
        if(event.which == 27) {
            g.closePreview;
        }
    }
    
    
    //--------------------events---------------------
    
    g.pictures.click(g.showPreview);
    g.preview.click(g.closePreview);
    g.prev.click(g.showPrevious);
    g.next.click(g.showNext);
    
    $('body').keyup(g.escClosePreview);
    
    
}

Gallery.prototype = new Component();