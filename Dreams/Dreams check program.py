quiz = {
    "question_1": {
        "question": "What is the capital of France?",
        "answer": "Paris"
    },
    "question_2": {
        "question": "What is the capital of South Korea?",
        "answer": "Seoul"
    },
    "question_3": {
        "question": "What is the capital of Germany?",
        "answer": "Berlin"
    },
    "question_4": {
        "question": "What is the capital of Italy?",
        "answer": "Rome"
    },
    "question_5": {
        "question": "What is the capital of Spain?",
        "answer": "Madrid"
    }
}

score = 0

for key, value in quiz.items():
    print(value['question'])
    answer = input("Answer? ")
    if answer.lower() == value['answer'].lower():
        print('Correct')
        score = score + 1
        print("Your score is " + str(score))
    else:
        print('Wrong')
        print("The answer is " + value['answer'])
        print("Your score is " + str(score))

print("You got " + str(score) + " out of 5 questions correctly")
print("Your percentage is " + str(int(score/5 * 100)) + "%")
