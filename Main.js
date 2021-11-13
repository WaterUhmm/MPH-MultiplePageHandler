
/**
 * 
 * Quick Note:
 * 
 * You must have a basic JavaScript and Node.js understanding before
 * using this code.
 * 
 * Used Libraries: Express.js, Path
 * 
 */

const Express = require ('express');
const Application = Express ();

class Server 
{
    Start (Port) 
    {
        Application.listen (Port, () => {
            console.log ('<!-- Application Started --!> | Port: ' + Port)
        })

        Application.get ('/', (Req, Res) => {
            Res.send ('Please move to localhost://' + Port + '/example To see the handler.')
        })
    }

    async PageHandler ()
    {
        /**
         * Note:
         * 
         * Once you add a string here, make sure to include it as a file in the "Pages" folder.
         * Same as if you add a file. Make sure to include the file's name into the string.
         *
         */
        const Files = ['Example']; 

        Files.forEach (File => {

            try 
            {
                /* Reading every file that ends with ".js" (And it's obviously included in the Array). */
                const FileReader = require ('./Pages/' + File + '.js'); 

                if ( File.length ) 
                {
                    /**
                     * Initializing the file
                     * 
                     * Make sure that you have exported a function named "__init__" and must have 1 parameter, which is Application.
                     */
                    FileReader.__init__ (Application);
                }
            }
            catch ( Exc ) /* "Exc" Stands for "Exception". */ 
            {
                throw Exc; 
            }
        });

    }
}

const Srv = new Server ();

Srv.Start (3000)    /* Starting the server */
Srv.PageHandler (); /* Executing the handler function */