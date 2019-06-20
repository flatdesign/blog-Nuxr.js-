#include <iostream>

using namespace std;

class Polygon {
  private:
    int *sides;
    int count;
  public:
    Polygon() {};
    Polygon(int length, int count) {
      this.count = count;
      *sides = new int[count]();
    }
    int getLength() {
      return this.length;
    }
    int getCount() {
      return this.count;
    }
    void setSide(int newLength, int numberSide) {
      sides[numberSide] = newLength;
    }
    void setCount(int newCount) {
      this.count = newCount;
    }
    int perimeter() {
      int sum;
      for (int i = 0; i < this.count; i++) {
        sum += sides[i];
      }
      return sum;
    }
    ~Polygon() {
      delete [] sides;
    };
};

class RegularPolygon : public Polygon {

}

int main() {
  Polygon polygon = new Polygon();
  RegularPolygon regularPolygon = new RegularPolygon();

  setlocale(LC_ALL, "rus");
  cout << "Введите строку: ";
  cin.getline(s, 128);
  cout << "Введите целое число: ";
  cin >> n

 
  return 0;
}