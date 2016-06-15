import java.net.*;
import java.io.*;


public class JavaHttpServer{

	public void start() throws IOException{
		ServerSocket server = new ServerSocket(9000);
	    while ( true ){
		    Socket client = server.accept();
		    new SocketHandlerThread(client).start();
		}
	}

	public static void main(String[] args) throws Exception{
		new JavaHttpServer().start();	    
    }

    class SocketHandlerThread extends Thread{
    	Socket client;
    	SocketHandlerThread(Socket client){
    		this.client = client;
    	}

    	public void run() {
    		try {
	    		OutputStream os = client.getOutputStream();
	    		Thread.sleep(1000);
	    		os.write("Hello World".getBytes());
	    		os.close();
	    		client.close();
	    	} catch (Exception e){

	    	}
    	}
    }

}


