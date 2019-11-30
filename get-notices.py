from datetime import datetime
import os
import json

# Directory settings
abspath = os.path.abspath(__file__)
dname = os.path.dirname(abspath)
os.chdir(dname)

subjects = []
accessToken = ""

with open("settings.txt","r") as f:
    accessToken = f.readline()
    while True:
        setting = f.readline()
        if not setting:
            break
        settinglist = setting.split(' ')
        settinglist[0] = int(settinglist[0])
        subjects.append(tuple(settinglist))


result = {}
result["lastUpdateTime"] = int(datetime.now().timestamp()*1000)
result["subjects"] = []

with open("log.txt", "a") as f:
    f.write(str(datetime.now()) + "\n")

for subject in subjects:
    subjectId, subjectTitle = subject
    notices = json.loads(os.popen('curl "https://www.yonple.com:4000/api/subject/timetable/'+str(subjectId)+'/yscec/board" -s --cookie "access_token=' + accessToken + ';"').read())


    resultSubject = {}
    resultSubject["title"] = subjectTitle
    resultSubject["notices"] = []
    for notice in notices:
        resultNotice = {}
        resultNotice["title"] = notice["title"]
        resultNotice["url"] = "https://yscec.yonsei.ac.kr/mod/jinotechboard/content.php?contentId=" + str(notice["boardId"]) +  "&boardform=1"
        resultNotice["time"] = int(datetime.strptime(notice["updatedAt"],"%Y-%m-%d %H:%M:%S").timestamp()*1000)

        resultSubject["notices"].append(resultNotice)

    resultSubject["notices"].sort(key = lambda object : object["time"])
    resultSubject["notices"] = resultSubject["notices"][::-1]


    result["subjects"].append(resultSubject)

print(str(result).replace("'",'"'))
    