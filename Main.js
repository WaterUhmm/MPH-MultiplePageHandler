
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
    Port

    async Start (Port) 
    {
        this.Port = Port;

        Application.listen (Port, () => {
            console.log ('<!-- Application Started --!> | Port: ' + Port)
        });

        await Application.get ('/', (Req, Res) => {
            Res.send ('Please move to localhost://' + Port + '/example To see the handler.')
        });

        await this.PageHandler (); /* Executing the Handler */
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

                if ( FileReader.name ) 
                {
                    /**
                     * 
                     * Initializing the file
                     * 
                     * In the file you made in the 'Pages' folder, make sure that you have exported a function named "__init__" 
                     * and must it have 1 parameter, which is Application.
                     * 
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

/**
 * In order to execute the code, type one of the 2 following commands in the terminal:
 * 
 * node .
 * 
 * npm start
 * 
 */