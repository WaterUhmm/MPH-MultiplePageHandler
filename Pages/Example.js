
/**
 * Example of a page with Express in another file.
 */

const Path = require ('path');

module.exports = /* Exporting an object with 2 keys. The first is the name of the page, and the second is the "__init__" function. */
{
    name: 'Example', /* Name is not required. */

    /**
     * Here are the initialization function. 
     * As I mentioned before you must 
     * put 1 parameter here, which refer to the Application.
     * 
     * @example 
     * const __init__ = async (Interaction ) => // Interaction: Application
     * {
     * Interaction.get ('/example', (Request, Response) => {
     * Response.sendFile ('Index.html') // Replace Index.html with your current filepath.
     * } );
     * }
     */
    __init__: async (App) => 
    {
        App.get ('/example', (Req, Res) => { 
            Res.sendFile (Path.resolve (__dirname, '../HTML/Example.html'));
        })
    }
}
