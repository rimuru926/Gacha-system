from html.parser import HTMLParser
path = r'C:\Users\שאול\Documents\Gacha-system\index.html'
text = open(path, encoding='utf-8').read()
class P(HTMLParser):
    def error(self, msg):
        print('ERR', msg)
parser = P()
parser.feed(text)
parser.close()
print('done')
