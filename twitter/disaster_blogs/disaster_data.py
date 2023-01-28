import pandas as pd

df = pd.read_csv (r'data\natural_Disasters_India .csv')
print(df.columns)
print("\t----------------------------------------------------------------------------------------------\t")
print(df.dtypes)
print(df.drop(['Unnamed: 0'],axis = 1))
# df =df.drop(['Unnamed: 0'],axis = 1)
# df.to_csv ('natural_Disasters_in_India .csv',index=False)



