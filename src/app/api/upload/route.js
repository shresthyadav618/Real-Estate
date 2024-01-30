
// import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
// import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
// import { PutObjectCommand } from '@aws-sdk/client-s3';
// const s3Client = new S3Client({
//   region : "ap-south-1",
//   credentials : {
//     accessKeyId : process.env.S3_ACCESS_KEY,
//     secretAccessKey : process.env.S3_SECRET_ACCESS_KEY
//   }
// });

// async function getObjectURL(key){
// const command = new GetObjectCommand({
//   Bucket : 'manushresth-real-estate',
//   Key : key
// });

// const url = await getSignedUrl(s3Client,command);
// return url;
// }

// const res = await getObjectURL('real-home.jpg');
// console.log(res);




import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { IncomingForm } from 'formidable';
import fs from "fs";
import { NextResponse } from 'next/server';
import { join } from 'path';

export async function POST(NextRequest) {
  const form = new IncomingForm();
  form.uploadDir = './public/uploads'; // Set the directory to store uploads
//NOTE TO CHANGE THE BUCKET 
  try {
   const formData = await NextRequest.formData();
    const file = formData.get('file');
    console.log("form-data",file,formData);
    

    // const bytes = await file.arrayBuffer();
    // console.log(bytes);
    // file.arrayBuffer().then((buffer)=>{
    //   console.log('buffer is : ',buffer);
    // })
    // const buffer = Buffer.from(bytes);
    // console.log('new buffer is : ',buffer);
    const path = join('/','tmp',file.name);
    console.log('the path is : ',path);
    // await writeFile(path,buffer);
    // console.log(`open ${path} to see the file`);
    // console.log('the file.path is equal to : ',file.path);

    const ext = file.name.split('.')[1];
    const newFilename = Date.now() + '.' + ext; 
    // console.log('the ext and newFileName is : ',ext,' and ',newFilename);
    // console.log(process.env.S3_ACCESS_KEY,process.env.S3_SECRET_KEY);
    const links = [];
    const client = new S3Client({
      region : 'ap-south-1',
      credentials : {
        accessKeyId : process.env.S3_ACCESS_KEY,
        secretAccessKey : process.env.S3_SECRET_ACCESS_KEY 
      }
    });
    await client.send(new PutObjectCommand({
      Bucket : 'manushresth-real-estate',
      Key: newFilename,
      Body: fs.readFileSync(path),
      ACL: 'public-read',

    }));
    const link = `https://manushresth-real-estate.s3.amazonaws.com/${newFilename}`;
    links.push(link);
    console.log(link,links);
    return NextResponse.json(links);
  } catch (err) {
    console.error(err);
    return NextResponse.json({
      status: 500,
      error: err.message,
    });
  }
}

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
