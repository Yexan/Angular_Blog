# Angular Blog

## How it's work 

This is a simple and quick blog based on AngularJs and disqus.
To add an article, you just have to add a JSON file in the JSON folder to create an new article (new route + new page + new comments flow).
For the moment, you must edit article_list.json file manually to add your article link to the home page.


## Make it work's

### Path to your project

The first thing you have to change is the path of your project from your server : 
 * In the index.html file in the head :
 ```html
    <base href="/path/to/you/project/"></base>
 ```
 * In the .htaccess 
 ```htaccess
    RewriteBase /path/to/you/project/
 ```

### Disqus ID 

Then, you will have to change the disqus ID to link the comment flow with your account.
Edit /partials/article.html this way :
```html
    <dir-disqus disqus-shortname="YourDisqusID"
              disqus-identifier="{{art.titre}}"
              disqus-url="http://path.com/to/your/project/{{art.lien}}">
  </dir-disqus>
 ```

## Personalized

### Style modification

You can modify css/screen.css to apply your style


### Article

**Note**: make the JSON file basename correspond to the path of your article (with a slug style).

**Note 2**: The description field in your JSON file is interpreted in the template file like HTML so feel free to write your article in HTML ! :) 
