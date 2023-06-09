# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

###### BACK BACK BACK BACK BACK BACK BACK BACK BACK BACK BACK BACK BACK BACK BACK BACK BACK ######
###### BACK BACK BACK BACK BACK BACK BACK BACK BACK BACK BACK BACK BACK BACK BACK BACK BACK ######

Workout.create(name: "Pulldown", kind: "Cable", muscle: "Back", difficulty: "Moderate")
Workout.create(name: "Pull-Ups", kind: "Bodyweight", muscle: "Back", difficulty: "Difficult")
Workout.create(name: "Australian Pullups", kind: "Bodyweight", muscle: "Back", difficulty: "Difficult")
Workout.create(name: "Lying Pullover", kind: "Dumbbell", muscle: "Back", difficulty: "Easy")
Workout.create(name: "One-Arm Bent Over Row", kind: "Dumbbell", muscle: "Back", difficulty: "Difficult")
Workout.create(name: "Bent Over Row", kind: "Barbell", muscle: "Back", difficulty: "Difficult")
Workout.create(name: "Seated Cable Row", kind: "Cable", muscle: "Back", difficulty: "Moderate")
Workout.create(name: "Cable Rows", kind: "Cable", muscle: "Back", difficulty: "Moderate")


###### BICEPS BICEPS BICEPS BICEPS BICEPS BICEPS BICEPS BICEPS BICEPS BICEPS BICEPS BICEPS ######
###### BICEPS BICEPS BICEPS BICEPS BICEPS BICEPS BICEPS BICEPS BICEPS BICEPS BICEPS BICEPS ######

Workout.create(name: "Bicep Curls", kind: "Dumbbell", muscle: "Biceps", difficulty: "Moderate")
Workout.create(name: "Hammer Curls", kind: "Dumbbell", muscle: "Biceps", difficulty: "Moderate")
Workout.create(name: "Reverse Curls", kind: "Dumbbell", muscle: "Biceps", difficulty: "Moderate")
Workout.create(name: "Bicep Curls", kind: "Barbell", muscle: "Biceps", difficulty: "Moderate")
Workout.create(name: "Reverse Curls", kind: "Barbell", muscle: "Biceps", difficulty: "Moderate")
Workout.create(name: "Chin Ups", kind: "Bodyweight", muscle: "Biceps", difficulty: "Difficult")


###### CHEST CHEST CHEST CHEST CHEST CHEST CHEST CHEST CHEST CHEST CHEST CHEST CHEST CHEST CHEST CHEST CHEST ######
###### CHEST CHEST CHEST CHEST CHEST CHEST CHEST CHEST CHEST CHEST CHEST CHEST CHEST CHEST CHEST CHEST CHEST ######

Workout.create(name: "Flat Bench Press", kind: "Dumbbell", muscle: "Chest", difficulty: "Moderate")
Workout.create(name: "Flat Bench Press", kind: "Barbell", muscle: "Chest", difficulty: "Difficult")
Workout.create(name: "Pushups", kind: "Bodyweight", muscle: "Chest", difficulty: "Moderate")
Workout.create(name: "Pec Flyes", kind: "Machine", muscle: "Chest", difficulty: "Easy")
Workout.create(name: "Incline Bench Press", kind: "Barbell", muscle: "Chest", difficulty: "Difficult")
Workout.create(name: "Incline Bench Press", kind: "Dumbbell", muscle: "Chest", difficulty: "Difficult")
Workout.create(name: "Decline Bench Press", kind: "Barbell", muscle: "Chest", difficulty: "Difficult")
Workout.create(name: "Decline Bench Press", kind: "Dumbbell", muscle: "Chest", difficulty: "Difficult")
Workout.create(name: "Pec Flyes", kind: "Dumbbell", muscle: "Chest", difficulty: "Moderate")
Workout.create(name: "Incline Pec Flyes", kind: "Dumbbell", muscle: "Chest", difficulty: "Moderate")
Workout.create(name: "Decline Pec Flyes", kind: "Dumbbell", muscle: "Chest", difficulty: "Moderate")

###### CALF CALF CALF CALF CALF CALF CALF CALF CALF CALF CALF CALF CALF CALF CALF CALF CALF ######
###### CALF CALF CALF CALF CALF CALF CALF CALF CALF CALF CALF CALF CALF CALF CALF CALF CALF ######

Workout.create(name: "Standing Calf Raise", kind: "Machine", muscle: "Calves", difficulty: "Easy")
Workout.create(name: "Seated Calf Raise", kind: "Machine", muscle: "Calves", difficulty: "Easy")
Workout.create(name: "Standing Calf Raise", kind: "Barbell", muscle: "Calves", difficulty: "Difficult")
Workout.create(name: "Seated Calf Raise", kind: "Barbell", muscle: "Calves", difficulty: "Moderate")
Workout.create(name: "Seated Calf Raise", kind: "Dumbbell", muscle: "Calves", difficulty: "Moderate")
Workout.create(name: "Seated Calf Raise", kind: "Dumbbell", muscle: "Calves", difficulty: "Moderate")

###### FOREARM FOREARM FOREARM FOREARM FOREARM FOREARM FOREARM FOREARM FOREARM FOREARM FOREARM ######
###### FOREARM FOREARM FOREARM FOREARM FOREARM FOREARM FOREARM FOREARM FOREARM FOREARM FOREARM ######

Workout.create(name: "Seated Wrist Curls", kind: "Dumbbell", muscle: "Forearm", difficulty: "Easy")
Workout.create(name: "Seated Wrist Curls", kind: "Barbell", muscle: "Forearm", difficulty: "Easy")
Workout.create(name: "Seated Reverse Wrist Curls", kind: "Dumbbell", muscle: "Forearm", difficulty: "Easy")
Workout.create(name: "Seated Reverse Wrist Curls", kind: "Barbell", muscle: "Forearm", difficulty: "Easy")
Workout.create(name: "Standing Wrist Curls", kind: "Dumbbell", muscle: "Forearm", difficulty: "Easy")
Workout.create(name: "Standing Reverse Wrist Curls", kind: "Dumbbell", muscle: "Forearm", difficulty: "Easy")
Workout.create(name: "Standing Wrist Curls", kind: "Barbell", muscle: "Forearm", difficulty: "Easy")
Workout.create(name: "Standing Reverse Wrist Curls", kind: "Barbell", muscle: "Forearm", difficulty: "Easy")

###### GLUTES GLUTES GLUTES GLUTES GLUTES GLUTES GLUTES GLUTES GLUTES GLUTES GLUTES GLUTES GLUTES ######
###### GLUTES GLUTES GLUTES GLUTES GLUTES GLUTES GLUTES GLUTES GLUTES GLUTES GLUTES GLUTES GLUTES ######

Workout.create(name: "Deadlift", kind: "Barbell", muscle: "Glutes", difficulty: "Difficult")
Workout.create(name: "Hip Bridges", kind: "Bodywight", muscle: "Glutes", difficulty: "Easy")
Workout.create(name: "Hip Thruster", kind: "Barbell", muscle: "Glutes", difficulty: "Moderate")
Workout.create(name: "Single-Legged Deadlift", kind: "Dumbbell", muscle: "Glutes", difficulty: "Difficult")
Workout.create(name: "Kickback", kind: "Bodyweight", muscle: "Glutes", difficulty: "Easy")
Workout.create(name: "Kickback", kind: "Cable", muscle: "Glutes", difficulty: "Moderate")
Workout.create(name: "Kickback", kind: "Machine", muscle: "Glutes", difficulty: "Easy")
Workout.create(name: "Seated Hip Abduction", kind: "Machine", muscle: "Glutes", difficulty: "Easy")

###### HAMSTRINGS HAMSTRINGS HAMSTRINGS HAMSTRINGS HAMSTRINGS HAMSTRINGS HAMSTRINGS HAMSTRINGS ######
###### HAMSTRINGS HAMSTRINGS HAMSTRINGS HAMSTRINGS HAMSTRINGS HAMSTRINGS HAMSTRINGS HAMSTRINGS ######

Workout.create(name: "Seated Leg Curls", kind: "Machine", muscle: "Hamstrings", difficulty: "Easy")
Workout.create(name: "Stiff-Legged Deadlift", kind: "Barbell", muscle: "Hamstrings", difficulty: "Difficult")
Workout.create(name: "Lying Leg Curls", kind: "Machine", muscle: "Hamstrings", difficulty: "Easy")
Workout.create(name: "Glute/Hame Raise", kind: "Machine", muscle: "Hamstrings", difficulty: "Difficult")

###### QUADS QUADS QUADS QUADS QUADS QUADS QUADS QUADS QUADS QUADS QUADS QUADS QUADS QUADS QUADS ######
###### QUADS QUADS QUADS QUADS QUADS QUADS QUADS QUADS QUADS QUADS QUADS QUADS QUADS QUADS QUADS ######

Workout.create(name: "Squat", kind: "Bodyweight", muscle: "Quads", difficulty: "Moderate")
Workout.create(name: "Squat", kind: "Barbell", muscle: "Quads", difficulty: "Difficult")
Workout.create(name: "Squat", kind: "Dumbbell", muscle: "Quads", difficulty: "Difficult")
Workout.create(name: "Lunges", kind: "Bodyweight", muscle: "Quads", difficulty: "Moderate")
Workout.create(name: "Seated Leg Press", kind: "Machine", muscle: "Quads", difficulty: "Easy")
Workout.create(name: "Lying Leg Press", kind: "Machine", muscle: "Quads", difficulty: "Moderate")
Workout.create(name: "Deficit Deadlift", kind: "Barbell", muscle: "Quads", difficulty: "Difficult")
Workout.create(name: "Seated Knee Extension", kind: "Machine", muscle: "Quads", difficulty: "Easy")
Workout.create(name: "Front Squat", kind: "Barbell", muscle: "Quads", difficulty: "Difficult")
Workout.create(name: "Walking Lunges", kind: "Barbell", muscle: "Quads", difficulty: "Difficult")
Workout.create(name: "Walking Lunges", kind: "Dumbbell", muscle: "Quads", difficulty: "Difficult")

###### SHOULDERS SHOULDERS SHOULDERS SHOULDERS SHOULDERS SHOULDERS SHOULDERS SHOULDERS SHOULDERS ######
###### SHOULDERS SHOULDERS SHOULDERS SHOULDERS SHOULDERS SHOULDERS SHOULDERS SHOULDERS SHOULDERS ######

Workout.create(name: "Military Press", kind: "Barbell", muscle: "Shoulders", difficulty: "Difficult")
Workout.create(name: "Shoulder Press", kind: "Dumbbell", muscle: "Shoulders", difficulty: "Difficult")
Workout.create(name: "Reverse Flyes", kind: "Machine", muscle: "Shoulders", difficulty: "Easy")
Workout.create(name: "Standing Front Raise", kind: "Dumbbell", muscle: "Shoulders", difficulty: "Easy")
Workout.create(name: "Standing Lateral Raise", kind: "Dumbbell", muscle: "Shoulders", difficulty: "Easy")
Workout.create(name: "Uptight Rows", kind: "Barbell", muscle: "Shoulders", difficulty: "Moderate")
Workout.create(name: "Standing Front Raise", kind: "Cable", muscle: "Shoulders", difficulty: "Easy")
Workout.create(name: "Standing Lateral Raise", kind: "Cable", muscle: "Shoulders", difficulty: "Easy")

###### TRICEPS TRICEPS TRICEPS TRICEPS TRICEPS TRICEPS TRICEPS TRICEPS TRICEPS TRICEPS TRICEPS TRICEPS ######
###### TRICEPS TRICEPS TRICEPS TRICEPS TRICEPS TRICEPS TRICEPS TRICEPS TRICEPS TRICEPS TRICEPS TRICEPS ######

Workout.create(name: "Seated Triceps Extension", kind: "Dumbbell", muscle: "Triceps", difficulty: "Moderate")
Workout.create(name: "Lying Triceps Extension", kind: "Dumbbell", muscle: "Triceps", difficulty: "Easy")
Workout.create(name: "Lying Triceps Extension", kind: "Body Bar", muscle: "Triceps", difficulty: "Easy")
Workout.create(name: "Seated Triceps Extension", kind: "Dumbbell", muscle: "Triceps", difficulty: "Moderate")
Workout.create(name: "Bench Dips", kind: "Bodyweight", muscle: "Triceps", difficulty: "Moderate")
Workout.create(name: "Triangle Pushups", kind: "Bodyweight", muscle: "Triceps", difficulty: "Difficult")

###### ABS ABS ABS ABS ABS ABS ABS ABS ABS ABS ABS ABS ABS ABS ABS ABS ABS ABS ABS ABS ABS ABS ABS ABS ######
###### ABS ABS ABS ABS ABS ABS ABS ABS ABS ABS ABS ABS ABS ABS ABS ABS ABS ABS ABS ABS ABS ABS ABS ABS ######

Workout.create(name: "Sit Ups", kind: "Bodyweight", muscle: "Abs", difficulty: "Moderate")
Workout.create(name: "Planks", kind: "Bodyweight", muscle: "Abs", difficulty: "Moderate", isometric: true)
Workout.create(name: "Side Planks", kind: "Bodyweight", muscle: "Abs", difficulty: "Difficult", isometric: true)
Workout.create(name: "Woodchopper", kind: "Cables", muscle: "Abs", difficulty: "Easy")
Workout.create(name: "Leg Raises", kind: "Bodyweight", muscle: "Abs", difficulty: "Moderate")
Workout.create(name: "Knee Raises", kind: "Bodyweight", muscle: "Abs", difficulty: "Easy")
Workout.create(name: "Heel Touches", kind: "Bodyweight", muscle: "Abs", difficulty: "Easy")
Workout.create(name: "Rotations", kind: "Machine", muscle: "Abs", difficulty: "Easy")


puts 'Workouts seeded'