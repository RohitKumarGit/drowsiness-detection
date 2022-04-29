# Driver Drowsiness Detection
### Objective :
Driving involves the performance of a particular sequence of actions with situational awareness, as well as, quick and accurate decision making. Situational awareness is critical in driving, as direct attention is required to process the perceived cues. Monitoring attention status, therefore, is one of the most important parameters for safe driving . This project presents a technique used to detect whether the driver is drowsy or not using facial features like eyes , mouth head orientation etc from live feed of webcam.

### About Dataset
An academic Driver Drowsiness Detection (DDD) dataset is used, which was first introduced during the 2016 Asian Conference on Computer Vision. Videos were recorded at a 480 X640 resolution with a frame rate of 30 and 15 fps for day and night videos, respectively. 
For each subject, videos were recorded in a controlled setting in five conditions: 
1. without glasses  
2. with glasses  
3. with sunglasses  
4. without glasses at night  
5. with glasses at night  
We used Transfer Learning for the problem
Transfer learning (TL) is a research problem in machine learning (ML) that focuses on storing knowledge gained while solving one problem and applying it to a different but related problem. 
For example, knowledge gained while learning to recognise cars could apply when trying to recognise trucks. 

We used ImageNet Dataset trained on VGG16 Network.VGG16 is a convolution neural net (CNN) architecture which was used to win ILSVR (Imagenet) competition in 2014. It is regarded as one of the excellent vision model architecture till date. Most unique characteristic about VGG16 is that instead of having a large number of hyper-parameters it focuses on having convolution layers of 3x3 filter with a stride 1 and always used the same padding and maxpool layer of 2x2 filter of stride 2. 


Results :
1. We converted the model to tensorflowjs and deployed it on the cloud through heroku (PasS )
2. Accuracy of prediction : 73.20%
Important project files :
1. driver-drowsiness-using-keras.ipynb ( contains model )
2. main.js ( uses tensorflowJS for making predictions)
3. drowsiness.tflite ( tflite model which we converted to )
## To run the project locally

```
1. Make sure nodejs is installed on the system
2. move to the folder and run "npm i" in command line/cmd
3. run "npm run dev" 
```

## Deployed Test link
```
https://drowsiness-detection-1i16vlpjh-rohitkumargit.vercel.app/
```
