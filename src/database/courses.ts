import mongoose, { Document, Model } from 'mongoose';

export interface CoursesInterface extends Document {
	name: string;
	imgUrl: string;
	description: string;
}

const CoursesSchema = new mongoose.Schema({
	name: String,
	imgUrl: String,
	description: String
});

let Courses: Model<CoursesInterface>;

const populateUserRefs = (doc: CoursesInterface, next: () => void) => {
	// doc.populate();
	next();
};

CoursesSchema.pre('find', function (this: any, next: () => void) {
	populateUserRefs(this, next);
});

CoursesSchema.pre('findOne', function (this: any, next: () => void) {
	populateUserRefs(this, next);
});

if (mongoose.models.Courses) {
	Courses = mongoose.model<CoursesInterface>('Courses');
} else {
	Courses = mongoose.model<CoursesInterface>('Courses', CoursesSchema);
}

export default Courses;
