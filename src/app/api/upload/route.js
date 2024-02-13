
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { IncomingForm } from 'formidable';
import { NextResponse } from 'next/server';

export async function POST(NextRequest) {
  const form = new IncomingForm();
  form.uploadDir = '/tmp'; // Set the directory to store uploads
//NOTE TO CHANGE THE BUCKET 
  try {
   const formData = await NextRequest.formData();
    const file = formData.get('file');
   
    const arrayBuffer = await file.arrayBuffer();

    // Convert the ArrayBuffer to Buffer
    const buffer = Buffer.from(arrayBuffer);
    // const file = formData.files.file; // Assuming the file field is named 'file'
    // console.log("form-data",file,formData);
    const ext = file.name.split('.')[1];
    const newFilename = Date.now() + '.' + ext; 
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
      Body: buffer,
      ACL: 'public-read',

    }));
    const link = `https://manushresth-real-estate.s3.amazonaws.com/${newFilename}`;
    links.push(link);
    // console.log(link,links);
    return NextResponse.json(links);
  } catch (err) {
    console.error(err);
    return NextResponse.json({
      status: 500,
      error: err.message,
    });
  }
}

